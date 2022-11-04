import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { NextIntlProvider } from 'next-intl';
import { useRouter } from 'next/router';

import '../styles/globals.css'
import fi from "../locales/fi.json";
import en from "../locales/en.json";
import se from "../locales/se.json";

const messages = { fi, en, se };

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const l = locale as "fi" | "en" | "se";

  return (
    <SessionProvider session={pageProps.session}>
      <NextIntlProvider locale={locale} messages={messages[l]}>
      <Component {...pageProps} />
      </NextIntlProvider>
    </SessionProvider>
  )
}

export default MyApp
