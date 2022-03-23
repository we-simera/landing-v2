import React from "react"
import Logo from "assets/images/simera-logo.svg"
import Layout from "components/Layout"

export default function Home() {
  return (
    <Layout>
      <section className="vh-100 d-flex justify-content-center align-items-center">
        <div className="d-none d-md-block text-center w-100 py-3">
          <img src={Logo} alt="Simera" height="auto" width="300rem" />
        </div>

        <section className="vh-100 vh-md-50 d-flex flex-column justify-content-between align-items-center p-2 px-md-5">
          <div className="d-md-none text-center w-100">
            <img src={Logo} alt="Simera" height="auto" width="50rem" />
          </div>

          <div className="mt-md-5 text-center">
            <h1 className="mb-3">we-símera</h1> {/* WE-SÍMERA */}
            <p className="text-muted">
              At Símera, we create visual concepts, to communicate ideas that
              inspire, inform, or captivate consumers. We develop the overall
              layout and production design for advertisements, brochures,
              magazines, animations and special effects.
            </p>
          </div>

          <div className="d-md-flex w-100 justify-content-between align-items-center text-center text-md-start">
            <div className="me-3">
              <h2 className="mb-0 text-muted">Reach Us</h2>
              <p>simera.digital@gmail.com</p>
            </div>
            <div className="">
              <p className="mb-0">+91 97907 66522</p>
              <p className="mb-0">+91 87544 62663</p>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}
