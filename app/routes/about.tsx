import React from "react"
import styled from "styled-components"
import AboutDelivery from "~/components/about/AboutDelivery"
import AboutDetails from "~/components/about/AboutDetails"
import AboutHero from "~/components/about/AboutHero"
import AboutPurpose from "~/components/about/AboutPurpose"

const about = () => {
  return (
    <Body>
      <AboutHero />
      <AboutPurpose />
      <AboutDelivery />
      <AboutDetails />
    </Body>
  )
}
const Body = styled.div``
export default about
