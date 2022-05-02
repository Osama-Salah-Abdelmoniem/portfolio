import { Link } from "react-scroll";
import { useState } from "react";
import "./NavBar.css";
import { FaLaptopCode } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { CgUserlane } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <header className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            OS.
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                spy
                to="about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <CgUserlane />
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy
                to="projects"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <FaLaptopCode />
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy
                to="skills"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <BsCodeSlash />
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy
                to="contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <FiUser />
                contact
              </Link>
            </li>

            <li className="nav-item">
              <a
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                download
                href={require("../data/Osama_Salah_Resume.pdf")}
              >
                <FiDownload />
                resume
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </header>
    </div>
  );
}
export default NavBar;
