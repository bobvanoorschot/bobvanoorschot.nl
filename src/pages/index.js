import React from "react"
import Header from "../components/Header"
import Jumbotron from "../components/Jumbotron"
import Work from "../components/Work"

import "../styles/index.css"

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Jumbotron></Jumbotron>
      <Work></Work>
    </main>
  )
}
