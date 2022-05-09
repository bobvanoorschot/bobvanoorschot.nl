import React from "react"
import styled from "styled-components"

const Container = styled.section`
  min-height: 100vh;
  background-color: var(--cloud);
`

const Section = styled.section`
  width: 100;
  padding: 16px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  h2 {
    color: var(--bred);
    font-size: 36px;
  }
  h3 {
    font-size: 24px;
    letter-spacing: 1px;
    padding: 0 0 16px;
  }
  .skills {
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 5;
    @media (min-width: 768px) {
      display: grid;
      grid-row-gap: 32px;
      grid-template-columns: 1fr 1fr;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      font-size: 18px;
      display: flex;
      align-items: center;
      padding: 4px 0;
      img {
        height: 24px;
        margin: 0 8px 0 0;
      }
    }
  }
`

export default function Specialties({ locale }) {
  return (
    <Container>
      <Section>
        <h2>Skills</h2>
        <div className="skills">
          <div>
            <h3>Ruby on Rails developer</h3>
            <ul>
              <li>
                <i className="icon ruby"></i>Ruby on Rails
              </li>
              <li>
                <i className="icon graphql"></i>GraphQL
              </li>
              <li>
                <i className="icon mysql"></i>MysQL
              </li>
              <li>
                <i className="icon postgresql"></i>PostgreSQL
              </li>
              <li>
                <i className="icon redis"></i>Redis
              </li>
              <li>
                <i className="icon heroku"></i>Heroku
              </li>
            </ul>
          </div>
          <div>
            <h3>Frontend developer</h3>
            <ul>
              <li>
                <i className="icon javascript"></i>Javascript
              </li>
              <li>
                <i className="icon reactjs"></i>React (
                <i className="icon gatsbyjs"></i>Gatsbyjs, <i className="icon nextjs"></i>NextJS)
              </li>
              <li>
                <i className="icon css"></i>CSS / <i className="icon sass"></i>
                SASS / <i className="icon less"></i>LESS / <i className="icon postcss"></i>PostCss
              </li>
              <li>
                <i className="icon graphql"></i>GraphQL
              </li>
              <li>
                <i className="icon vuejs"></i>VueJS
              </li>
              <li>
                <i className="icon bootstrap"></i>Bootstrap
              </li>
              <li>
                <i className="icon ant"></i>Ant.design
              </li>
            </ul>
          </div>
          <div>
            <h3>Ook gewerkt met:</h3>
            <ul>
              <li>
                <i className="icon php"></i>PHP
              </li>
              <li>
                <i className="icon wordpress"></i>Wordpress
              </li>
              <li>
                <i className="icon symfony"></i>Symfony
              </li>
              <li>
                <i className="icon aws"></i>AWS
              </li>
            </ul>
          </div>
          <div>
            <h3>Tools:</h3>
            <ul>
              <li>
                <i className="icon figma"></i>Figma
              </li>             
              <li>
                <i className="icon git"></i>Git
              </li>             
              <li>
                <i className="icon gitlab"></i>GitLab
              </li>             
              <li>
                <i className="icon github"></i>GitHub
              </li>             
              <li>
                <i className="icon postman"></i>Postman
              </li>             
            </ul>
          </div>
        </div>
      </Section>
    </Container>
  )
}
