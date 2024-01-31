"use client"
import styles from "@/src/styles/modal.module.css";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"

// TODO: add restrictions
const formSchema = z.object({
  username: z.string().min(2,{
    message: "Username must be at least 2 characters.",
  }).max(50),
  password: z.string()
})


export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values)
  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
              <FormItem>
              <FormControl>
                  <Input type="username" placeholder="Username" {...field}/>
              </FormControl>
              <FormMessage />
              </FormItem>
          )}
          />
          <div>
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <FormItem>
                    <FormControl>
                    <Input type="password" placeholder="Password" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <div>
              <a href="#">Forgot your password?</a>
            </div>
          </div>
          <Button variant="custom">
          LOG IN
          </Button>
        </form>
      </Form>
  );
}

