import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(location.pathname);

    const handleSectionClick = (section) => {
        setActiveSection(section);
      };

      return (
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={activeSection === "/" ? "active" : ""}
                onClick={() => handleSectionClick("/")}
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