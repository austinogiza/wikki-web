import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from "remix"

import NProgress from "nprogress"
import nProgressStyles from "~/styles/nprogress.css"
import type { MetaFunction } from "remix"
import toast from "react-toastify/dist/ReactToastify.css"
import styles from "./index.css"
import { ToastContainer } from "react-toastify"
import Navbar from "~/components/navbar/Navbar"
import Footer from "~/components/Footer"
import { useEffect } from "react"
import NavCover from "./components/navbar/NavCover"
import BackToTop from "./components/BackToTop"
export const meta: MetaFunction = () => {
  return {
    title: "Wikki",
    description: "Realtime delivery",
  }
}
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: toast },
    { rel: "stylesheet", href: nProgressStyles },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
  ]
}

export default function App() {
  const transition = useTransition()
  useEffect(() => {
    // when the state is idle then we can to complete the progress bar
    if (transition.state === "idle") NProgress.done()
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    else NProgress.start()
  }, [transition.state])
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <NavCover />
        <BackToTop />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
