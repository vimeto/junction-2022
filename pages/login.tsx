import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import Router from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginForm from "../components/forms/LoginForm";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props:{},
    };
  }

  return {
    props: {}
  }
}

const Login: React.FC = () => {
  return <LoginForm />;
};

export default Login;
