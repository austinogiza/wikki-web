import DownloadHero from "components/download/DownloadHero"
import DownloadPlatforms from "components/download/DownloadPlatforms"
import LayoutHead from "container/LayoutHead"
import React from "react"
import styled from "styled-components"

const download = () => {
  return (
    <Body>
      <LayoutHead title="Download wikki for iOS, Android" />
      <DownloadHero />
      <DownloadPlatforms />
    </Body>
  )
}
const Body = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export default download
