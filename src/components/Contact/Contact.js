import React from "react"
import styled from "styled-components"

const Container = styled.section`
  min-height: 100vh;
  background-color: var(--cloud);
`
const Section = styled.section`
  min-height: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  width: 100%;
  text-align: center;
  p {
    max-width: 70ch;
  }
  .contact {
    .ways {
      a {
        padding: 0 8px;
        color: var(--bred);
        letter-spacing: 1px;
        &:hover {
          color: var(--dred);
        }
      }
    }
    .links {
      padding: 32px 0;
      a {
        padding: 0 8px;
        color: var(--dred);
        letter-spacing: 1px;
        &:hover {
          color: var(--bred);
        }
      }
    }
  }
`

export default function Contact() {
  return (
    <Container>
      <Section>
        <div className="contact" id="contact">
          <h2>Neem contact met mij op:</h2>
          <p>
            Als developer heb ik veel al mijn telefoon op niet storen stand
            staan en ben ik beter te bereiken via e-mail. Stuur een email en dan
            maken we een bel/videobel afspaak.
          </p>
          <div className="ways">
            <a href="mailto:info@bobvanoorschot.nl">info@bobvanoorschot.nl</a>
          </div>

          <div className="links">
            <p>Voor meer informatie:</p>
            <a href="https://www.linkedin.com/in/bobvanoorschot/">LinkedIn</a>
            <a href="mailto:info@bobvanoorschot.nl">GitHub</a>
          </div>
        </div>
      </Section>
    </Container>
  )
}
