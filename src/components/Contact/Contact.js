import React from "react"
import styled from "styled-components"

const Container = styled.section`
  min-height: 100vh;
  background-color: var(--cloud);
`
const Section = styled.section`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Contact() {
  return (
    <Container>
      <Section>
        <div className="contact" id="contact"></div>
      </Section>
    </Container>
  )
}
