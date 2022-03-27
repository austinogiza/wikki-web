import React from "react"
import { MetaFunction } from "remix"
import styled from "styled-components"
import AboutBusiness from "~/components/about/AboutBusiness"
import AboutDelivery from "~/components/about/AboutDelivery"
import AboutDetails from "~/components/about/AboutDetails"
import AboutHero from "~/components/about/AboutHero"
import AboutPurpose from "~/components/about/AboutPurpose"
export const meta: MetaFunction = () => {
  return {
    title: "About - Use Wikki",
    description: "Realtime delivery",
  }
}
const about = () => {
  return (
    <Body>
      <AboutHero />
      <AboutPurpose />
      <AboutDelivery />
      <AboutDetails />
      <AboutBusiness />
    </Body>
  )
}
const Body = styled.div``
export default about
