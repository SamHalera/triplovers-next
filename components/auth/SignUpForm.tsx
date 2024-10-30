"use client";
import { signUpSchema } from "@/types/zodSchemes/authForms";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { signIn } from "next-auth/react";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const { toast } = useToast();
  const isLoading = form.formState.isSubmitting;
  const errorFirstname = form.formState.errors.firstname?.message;
  const errorLastname = form.formState.errors.lastname?.message;
  const errorEmail = form.formState.errors.email?.message;
  const errorPassword = form.formState.errors.password?.message;
  const errorConfirmPassword = form.formState.errors.confirmPassword?.message;
  const errorPrivacyPolicy =
    form.formState.errors.privacyPolicyValidation?.message;
  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      //create new user
      const responseRegister = await fetch(`/api/signUp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await responseRegister.json();
      const { error } = data;
      if (error) {
        console.log(error);
        toast({
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          variant: "default",
          description: "Account created!",
        });

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
          window.location.href = "/";
        }
      }
    } catch (e) {
      const { error } = e as ErrorType;
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="firstname"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your firstname"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="lastname"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your lastname"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your email"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter your confirmPassword"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button size={"lg"}>Sign Up</Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
