import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import RegistrationForm from "../components/forms/RegistrationForm";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session?.user) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

export default function Registration() {
  return <RegistrationForm />;
}
