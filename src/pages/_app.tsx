import "../../public/index.css"
import type { AppProps } from "next/app"
import Layout from "container/Layout"
import NProgress from "nprogress"
import nProgressStyles from "styles/nprogress.css"
import toast from "react-toastify/dist/ReactToastify.css"
import Router from "next/router"
import nProgress from "nprogress"
import { useEffect } from "react"
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start())
    Router.events.on("routeChangeComplete", () => NProgress.done())
    Router.events.on("routeChangeError", () => NProgress.done())
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
