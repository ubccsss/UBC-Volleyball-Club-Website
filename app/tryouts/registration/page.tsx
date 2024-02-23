"use client"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/src/components/ui/button"


import { Label } from "@/src/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { useRouter, useSearchParams} from 'next/navigation';
import { useState } from 'react';

const FormSchema = z.object({
  pposition: z.enum(["leftside", "middle", "rightside", "libero", "setter"], {
    required_error: "You need to select a primary position",
  }),
  sposition: z.enum(["leftside", "middle", "rightside", "libero", "setter"], {
    required_error: "You need to select a secondary position",
  }),
})

export default function Registration() {
  const params = useSearchParams();
  const type = params.get('tryout');

  // TODO: link to DB
  const [tryoutsOpen, setTryoutsStatus] = useState(true);
  
  function generateRadioGroupItems(items) {
    return items.map((item) => (
      <FormItem key={item.value} className="flex items-center space-x-3 space-y-0">
        <FormControl>
          <RadioGroupItem value={item.value} />
        </FormControl>
        <FormLabel className="font-normal">{item.label}</FormLabel>
      </FormItem>
    ));
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  console.log(params)

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <div>
     {tryoutsOpen ? (
        <>
          <div>
            <div className='my-[100px]'>
              <h1 className="text-center text-3xl font-extrabold">
                UBC Volleyball Club Tryouts - {type}
              </h1> 
              <div className='flex justify-center items-center my-[50px]'>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                    <FormField
                      control={form.control}
                      name="pposition"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Primary Position</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {generateRadioGroupItems([
                                { value: "leftside", label: "Leftside" },
                                { value: "middle", label: "Middle" },
                                { value: "rightside", label: "Rightside" },
                                { value: "setter", label: "Setter" },
                                { value: "libero", label: "Libero" },
                              ])}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="sposition"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Secondary Position</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {generateRadioGroupItems([
                                { value: "leftside", label: "Leftside" },
                                { value: "middle", label: "Middle" },
                                { value: "rightside", label: "Rightside" },
                                { value: "setter", label: "Setter" },
                                { value: "libero", label: "Libero" },
                              ])}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>        
            </div>
          </div>   
        </>
      ) : (
        <>
          <div>
            <div className='my-[100px]'>
              <h1 className="text-center text-3xl font-extrabold">
                Tryouts are not currently open.
              </h1>
            </div>
          </div>
        </>
      )}
    </div>
  )

}