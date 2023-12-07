import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUp, Logo, Letter, Lock, User } from "../../assets";
import { Input, RegistrationMessage } from "../../components";

const requiredErrorMsg = "Field is Required";
const permittedDomains = ["hotmail.com", "gmail.com", "lightit.io"];

export const userSchema = z
  .object({
    email: z
      .string()
      .min(1, requiredErrorMsg)
      .email({
        message: "Must be a valid email",
      })
      .refine(
        (email) => {
          const domain = email.split("@")[1];
          return permittedDomains.includes(domain);
        },
        { message: "Email domain is not permitted" }
      ),
    username: z
      .string()
      .min(1, requiredErrorMsg)
      .refine((username) => !/\s/.test(username), {
        message: "Username cannot contain spaces",
      })
      .refine((username) => !/\d/.test(username), {
        message: "Username cannot contain numbers",
      })
      .refine((username) => /^[a-z]+$/i.test(username), {
        message: "Username cannot contain special characters",
      })
      .refine((username) => /^[a-z]+$/.test(username), {
        message: "Username must contain only lowercase letters",
      }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .refine((password) => !/^[a-zA-Z0-9]+$/i.test(password), {
        message: "Password must contain at least one special character",
      })
      .refine((password) => /^(?=.*[a-z])(?=.*[A-Z])/.test(password), {
        message:
          "Password must contain at least one lowercase and one uppercase letter",
      }),
    confirm_password: z.string().min(1, requiredErrorMsg),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Password don't match",
  });

export type UserFormValues = z.infer<typeof userSchema>;

export const CreateAccountScreen = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setIsPasswordShown(!isPasswordShown);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserFormValues> = (data) => {
    setIsSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen h-fit lg:h-screen flex flex-col lg:flex-row justify-center lg:items-center bg-background-100 pt-20 lg:p-0">
      <img
        className="lg:w-32 lg:h-6 absolute top-8 left-8"
        src={Logo}
        alt="Logo"
      />
      <div className="w-full h-full lg:h-full p-8 lg:p-0 flex flex-col lg:flex-row gap-12 lg:gap-0">
        <img
          className="w-3/5 h-full hidden lg:block object-cover"
          src={SignUp}
          alt="Signup"
        />
        {!isSubmitted ? (
          <div className="w-full h-full lg:w-2/5 lg:p-10">
            <h1 className="text-techieGray-700 font-ubuntu text-3xl font-medium leading-9 pb-4">
              Sign up
            </h1>
            <p className="text-techieGray font-manrope text-base font-normal tracking-wider leading-8">
              If you already have an account registered <br /> You can{" "}
              <span className="text-complementaryRed-500 font-bold underline">
                Login here!
              </span>
            </p>
            <form
              className="pt-5 flex flex-col gap-16 lg:gap-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-y-3">
                <Input
                  id="email"
                  title="Email"
                  placeholder="Enter your email address"
                  {...register("email")}
                  error={errors.email?.message}
                  leftIcon={Letter}
                />

                <Input
                  id="username"
                  title="Username"
                  placeholder="Enter your user name"
                  {...register("username")}
                  error={errors.username?.message}
                  leftIcon={User}
                />

                <Input
                  id="password"
                  title="Password"
                  placeholder="Enter your password"
                  {...register("password")}
                  error={errors.password?.message}
                  leftIcon={Lock}
                  isPassword
                  isPasswordShown={isPasswordShown}
                  togglePasswordVisibility={togglePasswordVisibility}
                />

                <Input
                  id="confirm_password"
                  title="Confirm password"
                  placeholder="Confirm your password"
                  {...register("confirm_password")}
                  error={errors.confirm_password?.message}
                  leftIcon={Lock}
                  isPassword
                  isPasswordShown={isPasswordShown}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
              </div>

              <button
                className="bg-complementaryRed-500 rounded-full text-white p-2"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        ) : (
          <RegistrationMessage username={getValues("username")} />
        )}
      </div>
    </div>
  );
};
