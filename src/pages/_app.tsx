import React from "react";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import "@/styles/style.css";
// import "@/styles/plugins.css";

import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ReduxProvider store={store}>
        <Component {...pageProps} />;
      </ReduxProvider>
    </React.StrictMode>
  );
}
