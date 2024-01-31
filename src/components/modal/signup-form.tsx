import React from 'react';
import styles from "@/src/styles/modal.module.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"



// TODO: add restrictions
const formSchema = z.object({
  username: z.string().min(2,{
    message: "Username must be at least 2 characters.",
  }).max(50),
  password: z.string(),
  name: z.string()

})

interface InputField {
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

interface SignupFormProps {
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  inputFields: InputField[];
}

const SignupForm: React.FC<SignupFormProps> = ({ title, onSubmit, buttonText, inputFields }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  })

  return (
    <div>
      <h1 className={styles['login-title']}>{title}</h1>
      <Form {...form}>
        <form onSubmit={onSubmit} className={styles['form-container']}>
          {inputFields.map((field, index) => (
            <FormField
              key={index}
              control={form.control}
              name={field.name}
              render={({ fieldr }) => (
              <FormItem >
                  <Input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder} {...fieldr}
                  />
                <FormMessage />
              </FormItem>
              )}
            />
          ))}
          <Button type="submit" variant="custom">
            {buttonText}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
