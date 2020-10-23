import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { TimelineLite } from "gsap"

const HeaderCont = styled.header`
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  z-index: 1;
  padding: 16px 32px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Logo = styled.div`
  color: var(--bred);
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: -1px;
  line-height: 1rem;
  text-shadow: 0 1px 0 rgba(0,0,0,.5)
`

const Nav = styled.nav`
  ul {
    display: flex;
  }
  li {
    padding: 8px 16px;
    margin: 8px 16px;
    font-weight: bold;
    color: var(--dark);
    font-size: 1.8rem;
  }
`

export default function Header() {
  let header = useRef()
  const [tl] = useState(new TimelineLite()) 

  useEffect(() => {
    tl.from(
      header,
      1, {
        y: -250,
        ease: "ease-in-out",
      },
      2
    )
  })

  return (
    <HeaderCont ref={el => header = el}>
      <Logo>
        Bob<br></br>van<br></br> Oorschot
      </Logo>
      <Nav>
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </HeaderCont>
  )
}
