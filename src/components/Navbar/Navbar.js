"use client"

import { useState, useEffect } from "react"
import "./Navbar.scss"
import logo from "./../../assets/logo2.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navbarItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/singleservice" },
    { name: "Contact Us", path: "/contact" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent body scrolling when menu is open
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)
      })
    }

    // Handle menu close on resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu()
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={`main-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo || "/placeholder.svg"} alt="Medist Logo" className="logo" loading="lazy" />
            </Link>

            <button
              className={`navbar-toggler ${isOpen ? "open" : ""}`}
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarContent"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse ${isOpen ? "show" : ""}`} id="navbarContent">
              <ul className="navbar-nav">
                {navbarItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to={item.path} onClick={closeMenu}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="theme-btn">
                <Link to="/contact" className="btn-animate" onClick={closeMenu}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

