import React from "react"
import styled from "styled-components"
import DoMore from "components/home/DoMore"
import HomeBusiness from "components/home/HomeBusiness"
import HomeHero from "components/home/HomeHero"
import HomeWaiting from "components/home/HomeWaiting"
import UseCases from "components/home/UseCases"

const index = () => {
  return (
    <Body>
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
