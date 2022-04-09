import React from "react"
import Head from "next/head"
const LayoutHead = () => {
  return (
    <Head>
      <title>{title} - Use Wikki</title>
      <meta name="description" content="Real time deliveries" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default LayoutHead
