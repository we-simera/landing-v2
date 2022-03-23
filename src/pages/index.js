import React from "react"
import Logo from "assets/images/simera-logo.svg"
import Layout from "components/Layout"
import Wave from "components/Wave"

export default function Home() {
  return (
    <Layout>
      <Wave />
      <section className="vh-100 d-flex">
        <div className="h-100 w-100 d-none d-md-flex align-justify-center">
          <img src={Logo} alt="Simera" height="auto" width="300rem" />
        </div>

        <div className="mt-md-5">
          <section className="vh-75 d-flex flex-column justify-content-center align-items-center px-2 px-md-5">
            <div className="d-md-none text-center w-100">
              <img src={Logo} alt="Simera" height="auto" width="50rem" />
            </div>

            <div className="text-center mt-5 mt-md-0">
              <h1 className="mb-3">we-símera</h1> {/* WE-SÍMERA */}
              <p className="text-muted">
                At Símera, we create visual concepts, to communicate ideas that
                inspire, inform, or captivate consumers. We develop the overall
                layout and production design for advertisements, brochures,
                magazines, animations and special effects.
              </p>
            </div>
          </section>

          <section className="d-flex flex-column align-items-center px-2 px-md-5">
            <h2 className="mb-3">Reach Us</h2>
            <div className="d-lg-flex text-center">
              <p className="me-lg-5 text-muted">simera.digital@gmail.com</p>
              <p className="me-lg-3 text-muted">+91 97907 66522</p>
              <p className="text-muted">+91 87544 62663</p>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}
