import BusinessHero from "components/business/BusinessHero"
import BusinessPurpose from "components/business/BusinessPurpose"
import BusinessRid from "components/business/BusinessRid"
import LayoutHead from "container/LayoutHead"
import React from "react"
import styled from "styled-components"

const business = () => {
  return (
    <Body>
      {" "}
      <LayoutHead title="Business Using wikki" />
      <BusinessHero />
      <BusinessRid />
      <BusinessPurpose />
    </Body>
  )
}

const Body = styled.div``
export default business
