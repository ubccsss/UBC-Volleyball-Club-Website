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
import { Checkbox } from "@/src/components/ui/checkbox"
import Link from "next/link"
import Image from 'next/image'


const yearlevelItems = [
  {
    id: "first",
    label: "First",
  },
  {
    id: "second",
    label: "Second",
  },
  {
    id: "third",
    label: "Third",
  },
  {
    id: "fourth",
    label: "Fourth+",
  },
  {
    id: "masters",
    label: "Masters",
  },
  {
    id: "phd",
    label: "PhD",
  },
] as const

const FormSchema = z.object({
  year_level: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You need to select a year level",
  }),
  faculty: z.string().nonempty(),
  height: z.string().nonempty(),
  primary_position: z.enum(["leftside", "middle", "rightside", "libero", "setter"], {
    required_error: "You need to select a primary position",
  }),
  secondary_position: z.enum(["leftside", "middle", "rightside", "libero", "setter"], {
    required_error: "You need to select a secondary position",
  }),
  experience: z.string(),
  description: z.string(),
  standing_reach: z.string().nonempty(),
  spike_touch: z.string().nonempty(),
  block_touch: z.string().nonempty(),
  highlights: z.string(),
})

export default function Registration() {
  const router = useRouter();

  const params = useSearchParams();
  const type = params.get('tryout');

  // TODO: link to DB
  const [tryoutsOpen, setTryoutsStatus] = useState(true);
  
  function generateRadioGroupItems(items: any[]) {
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
    defaultValues: {
      year_level: ["first"],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-center justify-center">
        <a className="cursor-pointer" onClick={() => router.back()}>
          <Image height={30} width={30} src="/backarrow.svg" alt='back arrow'/>
        </a>
      </div>
     {tryoutsOpen ? (
        <>
          <div>
            <div className='my-[30px]'>
              <h1 className="text-center text-3xl font-extrabold">
                UBC Volleyball Club Tryouts - {type}
              </h1> 
              <div className='my-[50px] flex items-center justify-center'>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                    <FormItem className="space-y-3">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input value="Your Name" readOnly className="cursor-not-allowed bg-gray-200"/>
                      </FormControl>
                    </FormItem>
                    <FormItem className="space-y-3">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input value="000-000-0000" readOnly className="cursor-not-allowed bg-gray-200"/>
                      </FormControl>
                    </FormItem>
                    <FormItem className="space-y-3">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input value="name@email.com" readOnly className="cursor-not-allowed bg-gray-200"/>
                      </FormControl>
                    </FormItem>
                    <FormItem className="space-y-3">
                      <FormLabel>UBC Student Number</FormLabel>
                      <FormControl>
                        <Input value="12345678" readOnly className="cursor-not-allowed bg-gray-200"/>
                      </FormControl>
                    </FormItem>
                    <FormField
                      control={form.control}
                      name="year_level"
                      render={() => (
                        <FormItem className="space-y-3">
                          <FormLabel>What year are you in?</FormLabel>
                          <FormDescription className="text-sm text-gray-500">Select all that apply</FormDescription>
                          <div className="space-y-2">
                          {yearlevelItems.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="year_level"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          const fieldvals = field.value
                                          return checked
                                            ? field.onChange([...fieldvals, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="faculty"
                      render={({field}) => (
                        <FormItem className="space-y-3">
                          <FormLabel>What faculty are you in?</FormLabel>
                          <FormControl>
                            <Input type="faculty" placeholder="Faculty" {...field}/>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="height"
                      render={({field}) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Height (cm)</FormLabel>
                          <FormControl>
                            <Input type="height" placeholder="Height in cm" {...field}/>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="primary_position"
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
                      name="secondary_position"
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

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({field}) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Previous Highest Level of Club Experience (put N/A if none)</FormLabel>
                          <FormControl>
                            <Input type="experience" {...field}/>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({field}) => (
                        <FormItem className="space-y-3">
                          <FormLabel style={{ width: '500px', display: 'block', lineHeight: '1.5'}}>Please describe your volleyball experience, including club experience, 
                            accolades and achievements, training history, etc.</FormLabel>
                          <FormControl>
                            <Input type="description" {...field}/>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="standing_reach"
                      render={({field}) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Standing Reach</FormLabel>
                          <FormControl>
                            <Input type="standing_reach" {...field}/>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="spike_touch"
                      render={({field}) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Spike Touch</FormLabel>
                          <FormControl>
                            <Input type="spike_touch" {...field}/>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="block_touch"
                      render={({field}) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Block Touch</FormLabel>
                          <FormControl>
                            <Input type="block_touch" {...field}/>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="highlights"
                      render={({field}) => (
                        <FormItem className="space-y-3">
                          <FormLabel style={{ width: '500px', display: 'block', lineHeight: '1.5'}}>If you have any highlights/tape, please include it here! (link youtube video, ~3min)</FormLabel>
                          <FormControl>
                            <Input type="highlights" {...field}/>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <div className="w-[500px]">
                      <h1 className="font-bold">
                        By submitting, you agree to pay the mandatory $10.00 tryout fee. You will be redirected to the payment screen.
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <Button type="submit">Submit</Button>
                    </div>  
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
                Tryouts are not currently open. Sign up is not available.
              </h1>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
