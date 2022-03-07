import React, { FC } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import styled from "styled-components"
import { WikkiTheme } from "~/styles/ColorStyles"
import { Body4, Header5 } from "~/styles/TextStyles"

interface DriverProps {
  active?: boolean
  number?: number
  text?: string
  content?: string
  click?: (number: any) => void
}
const DriverAccordion: FC<DriverProps> = (props) => {
  const { number, active, text, content, click } = props
  return (
    <Body onClick={() => click(number)}>
      <Cover>
        <DriverNumber>
          <NumberText>{number}</NumberText>
        </DriverNumber>
        <DriverBody>
          <DriverContent>{text}</DriverContent>
          <DriverPara active={active}>{content}</DriverPara>
        </DriverBody>
        <DriverIcon>{active ? <DriverDown /> : <DriverUp />}</DriverIcon>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  min-height: 50px;
  max-width: 520px;
  width: 100%;

  margin: 24px 0;
  cursor: pointer;
  border-radius: 24px;
  background: ${WikkiTheme.white};
  padding: 16px;
  outline: none;
  transition: 0.4s all ease-in-out;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`
const Cover = styled.div`
  display: grid;
  grid-template-columns: 48px auto 32px;
  grid-gap: 16px;
  gap: 16px;
  transition: 0.4s ease-in-out;
`
const DriverNumber = styled.div`
  height: 40px;
  width: 40px;
  transition: 0.4s ease-in-out;

  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 32px;
    width: 32px;
  }
`
const NumberText = styled(Header5)``
const DriverBody = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.4s ease-in-out;
`
const DriverContent = styled(Header5)`
  transition: 0.4s ease-in-out;
`
const DriverPara = styled(Body4)<DriverProps>`
  margin: 8px 0;
  transition: 0.4s ease-in-out;
  height: ${(props) => (props.active ? "100%" : "0px")};
  display: ${(props) => (props.active ? "flex" : "none")};
`
const DriverIcon = styled.div`
  transition: 0.4s ease-in-out;
`
const DriverUp = styled(FiChevronUp)`
  height: 24px;
  width: 24px;
  transition: 0.4s ease-in-out;
`
const DriverDown = styled(FiChevronDown)`
  height: 24px;
  width: 24px;
  transition: 0.4s ease-in-out;
`
export default DriverAccordion
