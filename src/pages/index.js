import React from "react"
import Header from "../components/Header"
import Jumbotron from "../components/Jumbotron"
import Work from "../components/Work"
import About from "../components/About"
import Specialties from "../components/Specialties"
import Contact from "../components/Contact"

import "../styles/index.css"
import "../styles/icons.css"

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Jumbotron></Jumbotron>
      <About></About>
      <Specialties></Specialties>
      <Work></Work>
      <Contact></Contact>
    </main>
  )
}
