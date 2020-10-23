import React from "react"
import Header from "../components/Header"
import Jumbotron from "../components/Jumbotron"
import Work from "../components/Work"
import About from "../components/About"

import "../styles/index.css"

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Jumbotron></Jumbotron>
      <About></About>
      <Work></Work>
    </main>
  )
}
