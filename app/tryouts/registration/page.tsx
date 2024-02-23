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
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})

export default function Registration() {
  const params = useSearchParams();
  const type = params.get('tryout');

  // TODO: link to DB
  const [tryoutsOpen, setTryoutsStatus] = useState(true);
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  console.log(params)

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
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
                      name="type"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Primary Position</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="leftside" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Leftside
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="middle" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Middle
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="rightside" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Rightside
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="setter" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Setter
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="libero" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Libero
                                </FormLabel>
                              </FormItem>
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