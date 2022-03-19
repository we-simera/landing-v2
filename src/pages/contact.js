import React, { useRef } from "react"
import TextField from "@mui/material/TextField"
import Layout from "../components/Layout"

export default function Contact() {
  const buttonRef = useRef(null)
  const msgRef = useRef(null)

  function handleSubmit() {
    buttonRef.current.disabled = true
    buttonRef.current.innerText = "Sending..."
    setTimeout(() => {
      buttonRef.current.disabled = false
      buttonRef.current.innerText = "Contact Us"
      msgRef.current.innerText = "Message Sent!"
      setTimeout(() => {
        msgRef.current.innerText = ""
      }, 3000)
    }, 2000)
  }

  return (
    <Layout>
      <section className="d-flex align-items-center justify-content-center vh-75">
        <div className="d-md-flex align-items-start justify-content-around w-100">
          <div className="my-5 mt-md-0">
            <h3>REACH US</h3>
            <p className="my-5">simera.digital@gmail.com</p>
            <p>
              +91 97907 66522 <br /> +91 87544 62663
            </p>
          </div>
          <div className="">
            <TextField
              id="filled-basic"
              label="Name"
              variant="outlined"
              className="me-md-2 mb-2"
              sx={{
                "&.Mui-focused": {
                  borderColor: "#000",
                },
              }}
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="outlined"
              className="mb-2"
            />
            <br />
            <TextField
              id="filled-basic"
              label="Phone"
              variant="outlined"
              className="me-md-2 my-2"
            />
            <TextField
              id="filled-basic"
              label="Address"
              variant="outlined"
              className="my-2"
            />
            <br />
            <TextField
              id="outlined-multiline-flexible"
              label="Your Message"
              multiline
              rows={5}
              className="mt-2 w-100"
            />
            <br />
            <div className="d-flex align-items-center">
              <button
                ref={buttonRef}
                type="button"
                className="btn mt-3"
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#0a0a0a",
                  color: "#fff",
                  borderRadius: "50px",
                }}
              >
                Contact Us
              </button>
              <p className="mb-0 mt-3 ms-3" ref={msgRef}></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
