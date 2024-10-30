import * as z from "zod";

const requiredErrorMessage = "This field is required";
export const signInSchema = z.object({
  email: z
    .string({ required_error: requiredErrorMessage })
    .email({ message: "Invalid email!" }),
  password: z.string().min(1, { message: requiredErrorMessage }),
  stayConnected: z.boolean().default(false),
});

export const signUpSchema = z
  .object({
    firstname: z.string({ required_error: requiredErrorMessage }),
    lastname: z.string({ required_error: requiredErrorMessage }),
    email: z
      .string({ required_error: requiredErrorMessage })
      .min(1, { message: requiredErrorMessage })
      .email({ message: "Invalid email!" }),
    password: z
      .string({ required_error: "password-min-length-error" })
      .min(5, { message: "Password is too short!" }),
    //   .regex(/[A-Z]/, "password-rule-capital-error")
    //   .regex(/[0-9]/, "password-rule-digit-error")
    //   .regex(/[!@#$%^&*(),.?":{}|<>]/, "password-rule-specialChar-error"),
    confirmPassword: z.string({
      required_error: "confirmPassword-is-required",
    }) /*
    termOfUseValidation: z.boolean({
      required_error: 'termOfUseValidation-error',
    }),*/,
    privacyPolicyValidation: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords-rule-match-error",
    path: ["confirmPassword"],
  });
