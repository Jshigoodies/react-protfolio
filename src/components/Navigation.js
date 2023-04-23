import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
    const [activeSection, setActiveSection] = useState("/react-protfolio"); //automatically goes to the about page when opening portfolio the first time.

    const handleSectionClick = (section) => {
        setActiveSection(section);
      };

      return (
        <nav>
          <ul className="navbarUL">
            <li>
              <Link
                to="/react-protfolio"
                className={activeSection === "/react-protfolio" ? "active" : ""}
                onClick={() => handleSectionClick("/react-protfolio")}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={activeSection === "/portfolio" ? "active" : ""}
                onClick={() => handleSectionClick("/portfolio")}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={activeSection === "/contact" ? "active" : ""}
                onClick={() => handleSectionClick("/contact")}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className={activeSection === "/resume" ? "active" : ""}
                onClick={() => handleSectionClick("/resume")}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
    );
}

export default Navigation;