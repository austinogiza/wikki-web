import React from "react"
import styled from "styled-components"
import DriverAdvantage from "~/components/driver/DriverAdvantage"
import DriverHero from "~/components/driver/DriverHero"
import DriverMessage from "~/components/driver/DriverMessage"
import DriverRequirements from "~/components/driver/DriverRequirements"

const driver = () => {
  return (
    <Body>
      <DriverHero />
      <DriverAdvantage />
      <DriverMessage />
      <DriverRequirements />
    </Body>
  )
}
const Body = styled.div``
export default driver
