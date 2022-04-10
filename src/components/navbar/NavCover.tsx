import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import { useRouter } from "next/router"
const NavCover = () => {
  const router = useRouter()
  return (
    <>
      {router.pathname === "/404" ? null : (
        <>
          <Body>
            <Navbar />
          </Body>
        </>
      )}
    </>
  )
}
const Body = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background: transparent;
`
export default NavCover
