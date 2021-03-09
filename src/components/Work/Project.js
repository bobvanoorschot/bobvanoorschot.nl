import React from "react"
import styled from "styled-components"

const ProjectContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 0 32px 16px;
  background: var(--bred);
  z-index: 1;
  @media (min-width: 768px) {
    grid-template-rows: 1fr 2fr;
    display: grid;
    .text-container {
      max-width: 30%;
    }
  }
`

const Text = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 70%;
  z-index: -1;
  background-size: cover;
  background-position: center center;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  .inner {
    position: relative;
    width: 100;
    height: 100%;
    &:before {
      position: absolute;
      width: 33%;
      height: 100%;
      content: "";
      background: var(--bred);
      left: -150px;
      transform: skew(-15deg);
      box-shadow: 2px 0 2px rgba(0, 0, 0, 0.25);
    }
    &:after {
      position: absolute;
      width: 30%;
      height: 100%;
      content: "";
      background: var(--bred);
      right: -150px;
      transform: skew(-15deg);
      box-shadow: -2px 0 2px rgba(0, 0, 0, 0.25);
    }
    .bar {
      width: 50px;
      position: absolute;
      background: var(--bred);
      left: 350px;
      height: 100%;
      transform: skew(-15deg);
      box-shadow: -2px 0 2px rgba(0, 0, 0, 0.25), 2px 0 2px rgba(0, 0, 0, 0.25);
      &.bar-2 {
        left: 40%;
      }
      &.bar-3 {
        left: 60%;
      }
    }
  }
`

const Title = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-end;

  h2 {
    color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: var(--cloud);
    letter-spacing: 4px;
    font-size: 3rem;
    @media (min-width: 768px) {
      font-size: 6rem;
    }
  }
`

const Button = styled.button`
  border: 0;
  background: var(--purple);
  padding: 16px 32px;
  margin: 16px 0 0;
  font-size: 1rem;
  font-weight: bold;
  color: var(--cloud);
  text-shadow: 0 1px 0 var(--dred);
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 1px solid var(--cloud);
  &:hover {
    background-color: var(--dark);
  }
`

export default function Project({ project, onNext }) {
  const data = JSON.parse(project)
  console.log({ data })
  return (
    <ProjectContainer>
      <Title>
        <h2>{data.title}</h2>
      </Title>
      <div>
        <div className="text-container"
          dangerouslySetInnerHTML={{ __html: data.fields.description.nl }}
        ></div>
        <Button onClick={onNext}>Next</Button>
      </div>
      <Text
        style={{
          backgroundImage: `url("https://cdn.burobork.nl/${data.fields.Images[0].reference}")`,
        }}
      >
        <div className="inner">
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
          {/* <div className="bar"></div>

<Image className={`project-image project-image-0`}>
<div className="bottom"></div>
</Image>
<Image className={`project-image project-image-1`}>
<div className="bottom"></div>
</Image>
<div className="bar bar-3"></div>
<Image className={`project-image project-image-2`}>
<div className="bottom"></div>
</Image> */}
        </div>
      </Text>
    </ProjectContainer>
  )
}
