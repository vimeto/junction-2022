import { TextInput } from "@ui/TextInput";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button/Button";
import { User, Message, Lock } from "react-iconly";

const RegistrationForm = () => {
  const t = useTranslations("actions");
  const { register, handleSubmit } = useForm();

  const handleRegister = async (data: any) => {
    try {
      const userData = {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
      };

      const resCreation = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (resCreation.status !== 200) {
        throw new Error("Failed to create user...");
      }

      const resSignIn = await signIn("credentials", {
        email: userData.email,
        password: userData.password,
        redirect: false,
      });

      if (resSignIn && resSignIn.status !== 200) {
        throw new Error("Failed to singin...");
      }

      Router.replace("/registrationStepper");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="flex flex-col items-center pt-28 h-full"
    >
      <div className="text-black pt-30"> Hello there,</div>
      <div className="text-black text-xl pb-12 font-bold">
        Create an Account
      </div>
      <div className="relative text-gray-600 focus-within:text-sky-500 flex items-center py-2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <User />
        </span>
        <TextInput
          className="py-2 text-sm text-black bg-gray-200 rounded-xl pl-10 focus:outline-none focus:bg-grey-400 w-80"
          defaultValue=""
          placeholder="Name"
          {...register("name", { required: true })}
        />
      </div>
      <div className="relative text-gray-600 focus-within:text-sky-500 flex items-center py-2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <User />
        </span>
        <TextInput
          className="py-2 text-sm text-black bg-gray-200 rounded-xl pl-10 focus:outline-none focus:bg-grey-400 w-80"
          defaultValue=""
          placeholder="Username"
          {...register("username", { required: true })}
        />
      </div>
      <div className="relative text-gray-600 focus-within:text-sky-500 flex items-center py-2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Message />
        </span>
        <TextInput
          className="py-2 text-sm text-black bg-gray-200 rounded-xl pl-10 focus:outline-none focus:bg-grey-400 w-80"
          defaultValue=""
          placeholder="Email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="relative text-gray-600 focus-within:text-sky-500 flex items-center py-2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Lock />
        </span>
        <TextInput
          className="py-2 text-sm text-black bg-gray-200 rounded-xl pl-10 focus:outline-none focus:bg-grey-400 w-80"
          defaultValue=""
          placeholder="Password"
          type="password"
          {...register("password", { required: true, minLength: 5 })}
        />
      </div>
      <div className="pt-10">
        <Button type="submit" btnSize={"large"} textColor={"white"}>
          {t("register")}
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
