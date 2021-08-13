import "tailwindcss/tailwind.css";
// global styles
import "../../styles/globals.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { NextPage } from "next";
import { AuthGuard } from "src/guard/AuthGuard";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  auth?: boolean;
};

function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: any } = props;

  return (
    <>
      {Component.auth ? (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        // public page
        <Component {...pageProps} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
export default MyApp;
