// src/pages/_app.tsx
import "@/styles/globals.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";  // library base
import "@/styles/cookieconsent-overrides.css";          // your bar-style overrides

import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import ClientOnly from "@/components/ClientOnly";
import Layout from "@/layouts/Layout";
import i18n from "../../i18n-config";
import CookieConsentSetup from "@/components/CookieConsentSetup";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ClientOnly>
        <CookieConsentSetup />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClientOnly>
    </I18nextProvider>
  );
}
