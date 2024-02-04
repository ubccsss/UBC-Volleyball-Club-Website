"use client"

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
import styles from "@/src/styles/modal.module.css"

import { Button } from "../../../ui/button"
import { Input } from "../../../ui/input"

// TODO: add restrictions
const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50),
  password: z.string(),
})

interface ModalProps {}

const SigninModal: React.FC<ModalProps> = () => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      window.location.href = "/"
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values)
  }

  return (
    <div className={styles["modal-backdrop"]} onClick={handleBackdropClick}>
      <div className={styles["modal-content"]}>
        <h1 className={styles["login-title"]}>Login to your account</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={styles["form-container"]}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="username" placeholder="Username" {...field} />
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
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className={styles["forgot-password"]}>
                <a href="#">Forgot your password?</a>
              </div>
            </div>
            <Button variant="custom">LOG IN</Button>
          </form>
        </Form>
        <div className={styles["signup-section"]}>
          <h1 className={styles["sign-up-text"]}> Not registered?</h1>
          <a className={styles["sign-up-link"]} href="/signup">
            {" "}
            Sign up.
          </a>
        </div>
      </div>
    </div>
  )
}

export default SigninModal
