import React from "react"
import "assets/css/wave.css"

export default function Wave() {
  return (
    <>
      <section className="wave-section d-none d-xl-block">
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
      <section className="wave-section-2 d-none d-xl-block">
        <div className="wave-2 wave2"></div>
        <div className="wave-2 wave3"></div>
        <div className="wave-2 wave4"></div>
      </section>
    </>
  )
}
