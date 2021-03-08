import React from "react"
import styled from "styled-components"
// import { mediaQueries } from "../../styles/mediaQueries"

const Container = styled.section`
  min-height: 100vh;
  background-color: var(--purple);
`

const Inner = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  h2 {
    color: var(--cloud);
    font-size: 36px;
  }
  .about-text {
    grid-row: 2;
    grid-column-start: 2;
    grid-column-end: 4;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .image {
    grid-row: 2;
    grid-column-start: 5;
    img {
      max-width: 100%;
    }
  }
  p {
    flex: 1 1;
    color: var(--cloud);
    font-size: 18px;
    padding: 16px;
  }
`

export default function About() {
  return (
    <Container className="about" id="about">
      <Inner>
        <h2>Over</h2>
        <div className="about-text">
          <p>
            Leg je mij een complex software vraagstuk voor en geef je me de
            ruimte om een creatieve oplossing te vinden, dan ben ik het meest in
            mijn element. In korte tijd ontrafel ik het vraagstuk en vind ik
            aanknopingspunten voor de oplossing. Dit onderdeel van mijn werk
            maakt mij het meest enthousiast. Wanneer de software die ik
            geprogrammeerd heb het vraagstuk vervolgens ook daadwerkelijk oplost
            geeft me dat echt een kick.
          </p>
          <p>
            Hoewel ik vaak volledig opga in datgene waar ik mee bezig ben,
            verlies ik nooit het totaalplaatje uit het oog. Het helpt mij bij
            mijn werk als ik weet wat de context van een probleem is en welke
            plaats datgene wat ik doe inneemt in het grote geheel. Ik heb die
            overstijgende blik nodig om tot goede en passende oplossingen te
            komen.
          </p>
          <p>
            Mensen noemen mij een optimist en daar herken ik mijzelf zeker in;
            mijn overtuiging is dat alles kan, ik moet alleen nog uitvinden hoe.
            Die drive maakt dat ik mijzelf het vak van full stack developer heb
            kunnen aanleren. Als autodidact heb ik in de afgelopen 7 jaar
            ervaring opgedaan binnen mijn eigen bedrijf en in dienst van een
            groot softwarebedrijf.
          </p>
        </div>
        <div className="image">
          <img src="/images/bob.png"></img>
        </div>
      </Inner>
    </Container>
  )
}
