import React from "react"

import styled from "styled-components"
import DriverAdvantage from "components/driver/DriverAdvantage"
import DriverHero from "components/driver/DriverHero"
import DriverMessage from "components/driver/DriverMessage"
import DriverRequirements from "components/driver/DriverRequirements"
import LayoutHead from "container/LayoutHead"

const driver = () => {
  return (
    <Body>
      <LayoutHead title="Become a driver" />
      <DriverHero />
      <DriverAdvantage />
      <DriverMessage />
      <DriverRequirements />
    </Body>
  )
}
const Body = styled.div``
export default driver
