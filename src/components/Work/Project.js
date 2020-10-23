import React from 'react'
import styled from "styled-components"

const ProjectContainer = styled.div`
  width: 100%;

`

export default function Project({project}) {
  return (
    <ProjectContainer>
      <div>
        {project.name}
      </div>
      <div>Visit website</div>
    </ProjectContainer>
  )
}