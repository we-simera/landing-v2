import React from "react"
import "../assets/css/style.css"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <section className="container-fluid">{children}</section>
      <Footer />
    </>
  )
}
