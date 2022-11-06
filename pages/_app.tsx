import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";

import "../styles/globals.css";
import fi from "../locales/fi.json";
import en from "../locales/en.json";
import se from "../locales/se.json";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from "next/script";
import Style from "styled-jsx/style";

const messages = { fi, en, se };

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const l = locale as "fi" | "en" | "se";

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Script src="/viewport.js" />
      <NextIntlProvider locale={locale} messages={messages[l]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </SessionProvider>
  );
}

export default MyApp;
