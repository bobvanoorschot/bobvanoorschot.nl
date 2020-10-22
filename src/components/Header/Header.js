import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"

const HeaderCont = styled.header`
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  z-index: 1;
  padding: 16px 32px;
  display: flex;
  width: 100%;
  justify-items: space-between;
`
const Logo = styled.div`
  color: var(--dred);
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: -1px;
  line-height: 1rem;
`

const Nav = styled.nav`
  ul {
    display: flex;
  }
  li {
    padding: 8px;
    margin: 8px;
    font-weight: bold;
    color: var(--dark);
  }
`

export default function Header() {

  return (
    <HeaderCont>
      <Logo>
        Bob<br></br>van<br></br> Oorschot
      </Logo>
      <Nav>
        <ul>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </HeaderCont>
  )
}
