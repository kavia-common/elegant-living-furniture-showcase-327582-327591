import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FloatingContactCtas, ContactCtas } from "./ContactCtas";

// PUBLIC_INTERFACE
export default function Layout() {
  /** Site shell with sticky navbar, footer, and floating CTAs. */
  return (
    <div className="siteShell">
      <header className="navbar" role="banner">
        <div className="container">
          <div className="navInner">
            <a href="/" className="brand" aria-label="Elegant Living Home">
              <div className="brandMark" aria-hidden="true" />
              <div className="brandText">
                <strong>Elegant Living</strong>
                <span>Premium Furniture Studio</span>
              </div>
            </a>

            <nav className="navLinks" aria-label="Primary">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `navLink ${isActive ? "navLinkActive" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `navLink ${isActive ? "navLinkActive" : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `navLink ${isActive ? "navLinkActive" : ""}`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navLink ${isActive ? "navLinkActive" : ""}`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="navCtas" aria-label="Primary contact actions">
              <ContactCtas size="small" />
            </div>
          </div>
        </div>
      </header>

      <main className="main" role="main">
        <Outlet />
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footerInner">
            <div>
              © {new Date().getFullYear()} Elegant Living • Crafted for
              discerning homes
            </div>
            <div className="footerLinks" aria-label="Footer links">
              <a className="miniLink" href="/products">
                Products
              </a>
              <a className="miniLink" href="/about">
                About
              </a>
              <a className="miniLink" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingContactCtas />
    </div>
  );
}
