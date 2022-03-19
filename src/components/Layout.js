import React from "react"
import "../assets/css/style.css"
import NavBar from "./NavBar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <section className="container-fluid">{children}</section>
      <Footer />
    </>
  )
}
