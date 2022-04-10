import DispatchHero from "components/dispatch/DispatchHero"
import DispatchPurpose from "components/dispatch/DispatchPurpose"
import PickupHero from "components/pick/PickupHero"
import PickupPurpose from "components/pick/PickupPurpose"
import LayoutHead from "container/LayoutHead"
import React from "react"
import styled from "styled-components"

const Pickup = () => {
  return (
    <Body>
      <LayoutHead title="Wikki's Pick Up" />
      <PickupHero />
      <PickupPurpose />
    </Body>
  )
}
const Body = styled.section``
export default Pickup
