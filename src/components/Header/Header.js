import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { TimelineLite, gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const HeaderCont = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 16px 32px;
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  background: var(--cloud);
  @media (min-width: 768px) {
    padding: 16px 32px;
  }
`
const Logo = styled.div`
  color: var(--bred);
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: -1px;
  line-height: 1rem;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
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
    a {
      color: var(--dark);
      text-decoration: none;
      &:hover {
      }
    }
  }
  .hamburger {
    position: relative;
    display: inline-block;
    width: 1.25em;
    height: 0.8em;
    margin-right: 0.3em;
    border-top: 0.2em solid #fff;
    border-bottom: 0.2em solid #fff;
  }

  .hamburger:before {
    content: "";
    position: absolute;
    top: 0.3em;
    left: 0px;
    width: 100%;
    border-top: 0.2em solid #fff;
  }
`

export default function Header() {
  let header = useRef()
  let nav = useRef()
  let logo = useRef()
  const [tl] = useState(new TimelineLite())

  useEffect(() => {
    tl.from(
      header,
      1,
      {
        y: -250,
        ease: "ease-in-out",
      },
      2
    )
  })

  return (
    <HeaderCont ref={el => (header = el)}>
      <Logo ref={el => (logo = el)}>
        Bob<br></br>van<br></br> Oorschot
      </Logo>
      <Nav>
        <div className="hamburger"></div>
        <ul>
          <li>
            <a
              className="nav-link"
              href="#about"
              onClick={e => {
                e.preventDefault()
                gsap.to(window, {
                  duration: 1,
                  scrollTo: e.target.getAttribute("href"),
                })
              }}
            >
              Over
            </a>
          </li>
          <li>
            {" "}
            <a
              className="nav-link"
              href="#work"
              onClick={e => {
                e.preventDefault()
                gsap.to(window, {
                  duration: 1,
                  scrollTo: e.target.getAttribute("href"),
                })
              }}
            >
              Work
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#contact"
              className="nav-link"
              onClick={e => {
                e.preventDefault()
                gsap.to(window, {
                  duration: 1,
                  scrollTo: e.target.getAttribute("href"),
                })
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </Nav>
    </HeaderCont>
  )
}
