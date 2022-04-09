import React from "react"
import styled from "styled-components"
import { Header2, Body3, Header1, Body1, SubTitle } from "~/styles/TextStyles"
import purpose from "~/images/purpose01.png"
import purpose02 from "~/images/purpose02.png"
import { WikkiTheme } from "~/styles/ColorStyles"
const HomeWaiting = () => {
  return (
    <Body>
      <Cover>
        <WaitingRow>
          <WaitSub>Why Wikki? Because</WaitSub>
          <WaitTitle>Waiting is boring</WaitTitle>
          <WaitText>
            We know how annoying it can be waiting for your meal, order, package
            or pickup to be delivered same day.
          </WaitText>
        </WaitingRow>
        <DetailsGrid>
          <GridRight>
            <GridImage src={purpose02} alt="use wikki" />
          </GridRight>{" "}
          <GridLeft>
            <RideTitle>Robust delivery and pickup</RideTitle>
            <RideText>
              We know how hard it can be to start building your client base,
              especially as a student. We built Clutch to be a safe space for
              students to build out their side-hustles and get support from
              their classmates.
            </RideText>
          </GridLeft>
          <GridRight>
            <GridImage src={purpose02} alt="use wikki" />
          </GridRight>{" "}
          <GridLeft>
            <RideTitle>Robust delivery and pickup</RideTitle>
            <RideText>
              We know how hard it can be to start building your client base,
              especially as a student. We built Clutch to be a safe space for
              students to build out their side-hustles and get support from
              their classmates.
            </RideText>
          </GridLeft>
        </DetailsGrid>{" "}
        <DetailsGrid>
          <GridRight>
            <GridImage src={purpose} alt="use wikki" />
          </GridRight>
          <GridLeft>
            <RideTitle>Our Mission</RideTitle>
            <RideText>
              We know how hard it can be to start building your client base,
              especially as a student. We built Clutch to be a safe space for
              students to build out their side-hustles and get support from
              their classmates.
            </RideText>
          </GridLeft>
        </DetailsGrid>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  background: ${WikkiTheme.black};
  color: ${WikkiTheme.white};
`

const Cover = styled.div`
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  color: ${WikkiTheme.white};
`
const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  /* margin: 64px 0; */
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`

const GridLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${WikkiTheme.white};
  width: 100%;
`

const RideTitle = styled(Header2)`
  color: ${WikkiTheme.white};
`

const GridRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
`

const GridImage = styled.img`
  max-width: 550px;
  border-radius: 20px;
  max-height: 630px;
  min-height: 300px;
  height: 100%;
  outline: none;
  width: 100%;
`
const RideText = styled(Body3)`
  margin: 16px 0;
`
const WaitingRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 32px auto;
`
const WaitSub = styled(SubTitle)`
  color: ${WikkiTheme.white};
  text-align: center;
`
const WaitTitle = styled(Header1)`
  margin: 16px 0;
  color: ${WikkiTheme.white};
  text-align: center;
`
const WaitText = styled(Body1)`
  color: ${WikkiTheme.white};
  text-align: center;
`
export default HomeWaiting
