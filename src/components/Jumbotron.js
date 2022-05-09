import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import code from "./code.json"
import { Power3, gsap } from "gsap/all"

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
    display: none;
    position: absolute;
    left: 48.5%;
    z-index: 3;
    font-size: 5rem;
    color: var(--cloud);
    @media (min-width: 768px) {
     display: block;
    }
  }
`

const Title = styled.h1`
  padding: 0 10%;
  font-weight: 700;
  font-size: 2rem;
  color: var(--bred);
  z-index: 1;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.7);

  @media (min-width: 768px) {
    font-size: 6rem
  }
  
  span {
    color: var(--purple);
    display: block;
    font-size: 1.8rem;
    @media (min-width: 768px) {
      font-size: 5rem
    }
  }
`

const Code = styled.code`
  position: absolute;
  white-space: pre;
  color: var(--cloud2);
  z-index: 0;
  opacity: 0.7;
  font-size: .8rem;
  right: 10%;
  bottom: 0;
  user-select: none;
  @media (min-width: 768px) {
    font-size: 1.8rem
  }
`

const OnTop = styled.div`
  display: none;
  position: absolute;
  background: var(--bred);
  padding: 32px;
  width: 50%;
  height: 100%;
  top: 0;
  z-index: 2;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  &.right {
    background: var(--purple);
    right: 0;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 768px) {
    display: flex
  }
`

export default function Jumbotron() {
  let left = useRef()
  let right = useRef()
  const [tl] = useState(gsap.timeline())

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
      <OnTop ref={el => (left = el)}>Ruby developer</OnTop>
      <div className="and">&amp;</div>
      <OnTop ref={el => (right = el)} className="right">
        Rails developer
      </OnTop>
      <Container>
        <Title>
          Ruby on Rails Developer
          <span>Bob van Oorschot</span>
        </Title>
        <Code>{code.jumbotron}</Code>
      </Container>
    </Container>
  )
}
