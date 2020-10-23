import { StaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Project from "./Project"

const Container = styled.section`
  height: 100vh;
  background-color: var(--cloud);
`

export const query = graphql`
  {
    allItems(filter: { group: { eq: "Project" } }) {
      edges {
        node {
          id
          title
          field
        }
      }
    }
  }
`

export default function Work() {
  return (
    <Container>
      <div>
        <StaticQuery
          query={query}
          render={data => (
            <>
              {data.allItems.edges.map(project => (
                <Project key={project.id} project={project.node.field} />
              ))}
            </>
          )}
        ></StaticQuery>
      </div>
    </Container>
  )
}
