import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="d-flex align-items-end justify-content-center vh-25">
        <p className="text-muted">©{currentYear} by Simera Digital</p>
      </div>
    </>
  )
}
