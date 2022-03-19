import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className="d-flex justify-content-center align-items-center vh-75 border">
        <div className="text-center">
          <h1 className="mb-5">SÍMERA</h1>
          <p className="text-muted px-md-5">
            At Símera, we create visual concepts, to communicate ideas that
            inspire, inform, or captivate consumers. We develop the overall
            layout and production design for advertisements, brochures,
            magazines, animations and special effects.
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="btn mt-5"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "50px",
              }}
            >
              Contact US
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
