import React from "react"
import { MetaFunction } from "remix"
import styled from "styled-components"
import ContactForm from "~/components/contact/ContactForm"
import ContactHero from "~/components/contact/ContactHero"

export const meta: MetaFunction = () => {
  return {
    title: "Contact Us - Use Wikki",
    description: "Real time deliveries",
  }
}
const contact = () => {
  return (
    <Body>
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
