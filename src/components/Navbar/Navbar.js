 "use client"

 import { useState, useEffect } from "react"
 import "./Navbar.scss"
 import logo from "./../../assets/logo2.png"
 import { Link } from "react-router-dom"

 const NAV_ITEMS = [
   { name: "Home", path: "/" },
   { name: "About Us", path: "/about" },
   { name: "Services", path: "/singleservice" },
   { name: "Contact Us", path: "/contact" },
 ]

 const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false)
   const [scrolled, setScrolled] = useState(false)

   const toggleMenu = () => {
     setMenuOpen(prev => !prev)
     document.body.style.overflow = menuOpen ? "auto" : "hidden"
   }

   const closeMenu = () => {
     setMenuOpen(false)
     document.body.style.overflow = "auto"
   }

   useEffect(() => {
     const onScroll = () =>
       requestAnimationFrame(() => setScrolled(window.scrollY > 50))

     const onResize = () => {
       if (window.innerWidth > 768) {
         closeMenu()
       }
     }

     window.addEventListener("scroll", onScroll)
     window.addEventListener("resize", onResize)

     return () => {
       window.removeEventListener("scroll", onScroll)
       window.removeEventListener("resize", onResize)
     }
   }, [])

   return (
     <div className={`main-nav ${scrolled ? "scrolled" : ""}`}>
       <div className="container">
         <nav className="navbar navbar-expand-lg">
           <div className="container-fluid">
             <Link className="navbar-brand" to="/">
               <img
                 className="logo"
                 loading="lazy"
                 alt="Medist Logo"
                 src={logo || "/placeholder.svg"}
               />
             </Link>

             <button
               aria-label="Toggle navigation"
               onClick={toggleMenu}
               type="button"
               aria-controls="navbarContent"
               aria-expanded={menuOpen}
               className={`navbar-toggler ${menuOpen ? "open" : ""}`}
             >
               <span className="navbar-toggler-icon"></span>
             </button>

             <div
               className={`navbar-collapse ${menuOpen ? "show" : ""}`}
               id="navbarContent"
             >
               <ul className="navbar-nav">
                 {NAV_ITEMS.map(({ name, path }, idx) => (
                   <li className="nav-item" key={idx}>
                     <Link onClick={closeMenu} className="nav-link" to={path}>
                       {name}
                     </Link>
                   </li>
                 ))}
               </ul>

               <div className="theme-btn">
                 <Link
                   to="/contact"
                   onClick={closeMenu}
                   className="btn-animate"
                 >
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
