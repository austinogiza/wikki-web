import React from "react"
import { MetaFunction } from "remix"
import styled from "styled-components"
import DriverAdvantage from "components/driver/DriverAdvantage"
import DriverHero from "components/driver/DriverHero"
import DriverMessage from "components/driver/DriverMessage"
import DriverRequirements from "components/driver/DriverRequirements"
export const meta: MetaFunction = () => {
  return {
    title: "Become a driver - Use Wikki",
    description: "Realtime delivery",
  }
}
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
