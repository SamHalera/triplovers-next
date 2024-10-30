"use client";
import { signInSchema } from "@/types/zodSchemes/authForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useToast } from "@/hooks/use-toast";

const SignInForm = () => {
  const params = useSearchParams();
  const prevUrl = params.get("prevUrl");
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      stayConnected: false,
    },
  });

  const isLoading = form.formState.isLoading;
  const isDirty = form.formState.isDirty;
  const errorEmailMessage = form.formState.errors.email?.message;
  const errorPassMessage = form.formState.errors.password?.message;

  const router = useRouter();

  const { toast } = useToast();
  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log("values==>", values);
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      toast({
        description: "Oops! Invalid credentials!",
        variant: "destructive",
      });
    } else {
      console.log("signInData==>", signInData);

      window.location.href = prevUrl ? `${prevUrl}` : "/";
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="flex gap-4">
                    Email <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your email"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="flex gap-4">
                    Password <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />

          <Button size={"lg"}>SIGIN</Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
