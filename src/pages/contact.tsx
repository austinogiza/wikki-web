import React from "react"

import styled from "styled-components"
import ContactForm from "components/contact/ContactForm"
import ContactHero from "components/contact/ContactHero"
import LayoutHead from "container/LayoutHead"

const contact = () => {
  return (
    <Body>
      <LayoutHead title="Contact Us" />
      <ContactHero />
      <ContactForm />
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export default contact
