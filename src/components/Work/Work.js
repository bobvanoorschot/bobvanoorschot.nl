import React, { useState, useEffect, useRef } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Project from "./Project"

import { TimelineLite } from "gsap"

const Container = styled.section`
  height: 100vh;
  background-color: var(--cloud);
  position: relative;
  .show {
    position: absolute;
    left: 0;
    width: 100%;
  }
  .right {
    position: absolute;
    width: 100%;
    right: 100%;
  }
  .left {
    position: absolute;
    width: 100%;
    right: 100%;
  }
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
  const [current, setCurrent] = useState(0)
  const [nextNumber, setNextNumb] = useState(1)
  const [tl] = useState(new TimelineLite({ paused: false }))

  let right = useRef()

  useEffect(() => {
    tl.to(right, 1, {
      left: 0,
    })
  })

  return (
    <Container className='work' id='work'>
      <div>
        <StaticQuery
          query={query}
          render={data => {
            const length = data.allItems.edges.length
            const now = data.allItems.edges[current]
            const next = data.allItems.edges[nextNumber]
            return (
              <>
                <div className="show" ref={el => (right = el)}>
                  <Project
                    project={now.node.field}
                    onNext={() => {
                      let ln = getNextNumber(length, current)
                      setCurrent(ln)
                      setNextNumb(getNextNumber(length, ln))
                    }}
                  />
                </div>
                <div className="right">
                  <Project project={next.node.field} />
                </div>
              </>
            )
          }}
        ></StaticQuery>
      </div>
    </Container>
  )
}

function getNextNumber(length, current) {
  if (current < length - 1) {
    return current + 1
  } else {
    return 0
  }
}
