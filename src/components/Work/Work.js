import React from 'react';
import styled from "styled-components"
import Project from './Project';

import data from './Projects.json'

const Container = styled.section`
  height: 100vh;
  background-color: var(--cloud);
`

export default function Work() {
  return <Container>
    <div>
      {data.projects.map(project => (
        <Project project={project} />
      ))}
    </div>

  </Container>
}