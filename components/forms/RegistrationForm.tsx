import { TextInput } from "@ui/TextInput";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { Button } from "@ui/Button/Button";

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
    <form onSubmit={handleSubmit(handleRegister)}>
      <TextInput
        defaultValue=""
        placeholder="Username"
        {...register("name", { required: true })}
      />
      <TextInput
        defaultValue=""
        placeholder="Username"
        {...register("username", { required: true })}
      />
      <TextInput
        defaultValue=""
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <TextInput
        defaultValue=""
        placeholder="Password"
        {...register("password", { required: true, minLength: 5 })}
      />
      <Button type="submit">{t("finish")}</Button>
    </form>
  );
};

export default RegistrationForm;
