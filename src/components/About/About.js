import React from "react"
import styled from "styled-components"

const Container = styled.section`
  height: 100vh;
  background-color: var(--purple);
`

const Inner = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  h2 {
  }
`

export default function About() {
  return (
    <Container className="about" id="about">
      <Inner>
        <h2>Over</h2>
      </Inner>
    </Container>
  )
}
