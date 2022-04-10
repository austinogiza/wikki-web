import DispatchHero from "components/dispatch/DispatchHero"
import DispatchPurpose from "components/dispatch/DispatchPurpose"
import LayoutHead from "container/LayoutHead"
import React from "react"
import styled from "styled-components"

const Dispatch = () => {
  return (
    <Body>
      <LayoutHead title="Wikki's Dispatch" />
      <DispatchHero />
      <DispatchPurpose />
    </Body>
  )
}
const Body = styled.section``
export default Dispatch
