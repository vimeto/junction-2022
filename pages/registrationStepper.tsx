import router from "next/router";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormStepper } from "../components/RegistrationStepper/Stepper";
import { ActivityLevel } from "../lib/types";
import { getServerSideProps as gSSP } from "../lib/registrationStepper/utils";

export const getServerSideProps = gSSP;

export default function RegistrationStepper() {
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    defaultValues: {
      activityLevel: ActivityLevel.Medium,
      sharing: true,
    },
  });

  const onSubmit: (data: any) => Promise<void> = async (data: any) => {
    try {
      setLoading(true);
      const res = await fetch("/api/userProperties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      setLoading(false);
      if (res.status >= 400) throw new Error("Failed to update profile");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };
  const handleFinish = methods.handleSubmit(onSubmit);

  // TODO: replace with spinner component

  return (
    <FormProvider {...methods}>
      {!loading ? <FormStepper handleFinish={handleFinish} /> : "loading..."}
    </FormProvider>
  );
}
