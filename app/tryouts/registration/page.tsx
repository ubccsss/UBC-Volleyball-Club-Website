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
import { Input } from "@/src/components/ui/input"


 
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
  // yearlevel: z.array(z.enum(["First", "Second", "Third", "Fourth+", "Masters", "PhD"], {
  //   required_error: "You need to select a year level",
  // })).nonempty(),
  // faculty: z.string().nonempty(),
  // experience: z.string().nonempty(),

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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
    // console.log(form);
  }

  
  const [selectedValues, setSelectedValues] = useState([]);
  
  function handleCheckboxChange(value) {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
    form.setValue("yearlevel", selectedValues);

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
              <div className='my-[50px] flex items-center justify-center'>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                    <FormItem className="space-y-3">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input value="Your Name" readOnly className="bg-gray-200 cursor-not-allowed"/>
                      </FormControl>
                    </FormItem>
                    <FormItem className="space-y-3">
                      <FormLabel>UBC Student Number</FormLabel>
                      <FormControl>
                        <Input value="12345678" readOnly className="bg-gray-200 cursor-not-allowed"/>
                      </FormControl>
                    </FormItem>
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
                    <FormItem name="yearlevel" className="space-y-3">
                      <FormLabel>What year are you in?</FormLabel>
                      <p className="text-sm text-gray-500">Select all that apply</p>
                      <div className="space-y-2">
                        {['First', 'Second', 'Third', 'Fourth+', 'Masters', 'PhD'].map((value) => (
                          <label key={value} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              value={value}
                              onChange={() => handleCheckboxChange(value)}
                              checked={selectedValues.includes(value)}
                            />
                            <span className="text-sm">{value}</span>
                          </label>
                        ))}
                      </div>
                    </FormItem>
                    <FormItem name="faculty" className="space-y-3">
                      <FormLabel>What faculty are you in?</FormLabel>
                      <FormControl>
                        <Input type="faculty" placeholder="Faculty"/>
                      </FormControl>
                    </FormItem>
                    <FormItem name="experience" className="space-y-3">
                      <FormLabel>Previous Highest Level of Club Experience (put N/A if none)</FormLabel>
                      <FormControl>
                        <Input type="experience"/>
                      </FormControl>
                    </FormItem>
                    <div className="w-[500px]">
                      <h1>By submitting, you agree to pay the mandatory $10.00 tryout fee. You will be redirected to the payment screen.</h1>
                    </div>
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