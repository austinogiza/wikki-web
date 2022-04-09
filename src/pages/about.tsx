import LayoutHead from "container/LayoutHead"

import styled from "styled-components"
import AboutBusiness from "components/about/AboutBusiness"
import AboutDelivery from "components/about/AboutDelivery"
import AboutDetails from "components/about/AboutDetails"
import AboutHero from "components/about/AboutHero"
import AboutPurpose from "components/about/AboutPurpose"

const about = () => {
  return (
    <Body>
      <LayoutHead title="About" />
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
