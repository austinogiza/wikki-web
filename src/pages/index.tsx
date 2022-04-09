import React from "react"
import styled from "styled-components"
import DoMore from "components/home/DoMore"
import HomeBusiness from "components/home/HomeBusiness"
import HomeHero from "components/home/HomeHero"
import HomeWaiting from "components/home/HomeWaiting"
import UseCases from "components/home/UseCases"
import LayoutHead from "container/LayoutHead"

const index = () => {
  return (
    <Body>
      <LayoutHead title="Home" />
      <HomeHero />
      <HomeWaiting />
      <UseCases />
      <HomeBusiness />
      <DoMore />
    </Body>
  )
}
const Body = styled.div``
export default index
