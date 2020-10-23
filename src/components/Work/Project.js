import React from "react"
import styled from "styled-components"

const ProjectContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  display: grid;
  background: var(--bred);
  grid-template-rows: 1fr 2fr;
`

const Image = styled.div`
  width: 1280px;
  height: 720px;
  overflow: hidden;
  postion: absolute;
  transform
  &.project-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    left: 0;
  }
`
const Text = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 16px 32px;
  justify-content: space-between;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  h2 {
    color: var(--bred);
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: var(--cloud);
    letter-spacing: 4px;
    font-size: 8rem;
  }
`

const Button = styled.button`
  border: 0;
  background: var(--purple);
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--cloud);
  text-shadow: 0 1px 0 var(--dred);
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background-color: var(--dark);
  }
`

export default function Project({ project }) {
  const data = JSON.parse(project)
  console.log({ data })
  return (
    <ProjectContainer>
      <Title>
        <h2>{data.title}</h2>
      </Title>
      <Text>
        <Image
          className={`project-image`}
          style={{
            backgroundImage: `url("https://cdn.burobork.nl/${data.fields.Images[0].reference}")`,
          }}
        ></Image>
        <div
          dangerouslySetInnerHTML={{ __html: data.fields.description.nl }}
        ></div>
        <Image
          className={`project-image`}
          style={{
            backgroundImage: `url("https://cdn.burobork.nl/${data.fields.Images[1].reference}")`,
          }}
        ></Image>
      </Text>
    </ProjectContainer>
  )
}
