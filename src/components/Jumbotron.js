import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import code from "./code.json"
import { TimelineLite, Power3 } from "gsap/all"

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  align-items: center;
  height: 100vh;
  background: var(--cloud);
  position: relative;
  z-index: 0;
  .and {
    position: absolute;
    left: 48.5%;
    z-index: 3;
    font-size: 5rem;
    color: var(--cloud);
  }
`

const Title = styled.h1`
  padding: 0 10%;
  font-weight: 700;
  font-size: 6rem;
  color: var(--bred);
  z-index: 1;
  span {
    color: var(--purple);
    display: block;
    font-size: 5rem;
  }
`

const Code = styled.code`
  position: absolute;
  white-space: pre;
  color: var(--cloud2);
  z-index: 0;
  opacity: 0.7;
  font-size: 1.8rem;
  right: 10%;
  bottom: 0;
  user-select: none;
`

const OnTop = styled.div`
  position: absolute;
  background: var(--bred);
  width: 50%;
  height: 100%;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #fff;
  font-weight: bold;
  &.right {
    background: var(--purple);
    right: 0;
  }
`

export default function Jumbotron() {
  let left = useRef()
  let right = useRef()
  const [tl] = useState(new TimelineLite({ paused: false }))

  useEffect(() => {
    tl.to(
      left,
      1.2,
      {
        left: "-50%",
        ease: Power3.easeInOut,
      },
      1.5
    ).to(
      right,
      1.2,
      {
        right: "-50%",
        ease: Power3.easeInOut,
      },
      1.5
      )
      tl.to(
        ".and",
        0.6,
        {
          opacity: 0,
          ease: Power3.easeInOut,
      },
      1.6
    )
  })
  return (
    <Container>
      <OnTop ref={el => (left = el)}>Frontend developer</OnTop>
      <div className="and">&amp;</div>
      <OnTop ref={el => (right = el)} className="right">
        Backend developer
      </OnTop>
      <Container>
        <Title>
          Full-Stack Developer
          <span>Bob van Oorschot</span>
        </Title>
        <Code>{code.jumbotron}</Code>
      </Container>
    </Container>
  )
}
