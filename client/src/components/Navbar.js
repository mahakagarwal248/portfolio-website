import { useLayoutEffect, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import hamburgerIcon from "../assets/hamburger.png";

function Navbar() {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const getWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  const handleonclick = (path) => {
    if (path !== "/") {
      const id = path.split("#")[1];
      const servicesElement = document.getElementById(id);
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  const toggleMenu = (event) => {
    // Stop propagation to prevent closing immediately after opening
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useLayoutEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    getWidth();
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row bg-black opacity-90 h-16 text-white items-center justify-between">
        <div className="text-left pl-8 w-2/3 md:w-1/3">
          <p className="text-xl font-bold">{"<Mahak Agarwal />"}</p>
        </div>
        {screenWidth < 968 ? (
          <div className="relative w-1/3">
            <img
              src={hamburgerIcon}
              alt="menu"
              className="h-10 w-11 cursor-pointer p-2 mr-5 ml-auto rounded-lg bg-white"
              onClick={toggleMenu}
            />
            {showMenu ? (
              <div
                className="absolute right-0 mt-3 mr-5 w-48 px-4 bg-white rounded-lg shadow-2xl shadow-black"
                ref={menuRef}
              >
                <p
                  className="cursor-pointer p-2 text-black border-b-2 border-b-black"
                  onClick={() => handleonclick("/")}
                >
                  Home
                </p>
                <p
                  className="cursor-pointer p-2 text-black border-b-2 border-b-black"
                  onClick={() => handleonclick("#about")}
                >
                  About
                </p>
                <p
                  className="cursor-pointer p-2 text-black border-b-2 border-b-black"
                  onClick={() => handleonclick("#work-history")}
                >
                  Work History
                </p>
                <p
                  className="cursor-pointer p-2 text-black border-b-2 border-b-black"
                  onClick={() => handleonclick("#skills")}
                >
                  Skills
                </p>
                <p
                  className="cursor-pointer p-2 text-black border-b-2 border-b-black"
                  onClick={() => handleonclick("#portfolio")}
                >
                  Portfolio
                </p>
                <p
                  className="cursor-pointer p-2 text-black border-b-2 border-b-black"
                  onClick={() => handleonclick("#achievements")}
                >
                  Achievements
                </p>
                <p
                  className="cursor-pointer p-2 text-black border-b-2 border-b-black"
                  onClick={() => handleonclick("#get-in-touch")}
                >
                  Contact
                </p>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="flex flex-row w-2/3 justify-evenly text-lg ml-5 xl:pr-24">
            <p className="cursor-pointer" onClick={() => handleonclick("/")}>
              Home
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleonclick("#about")}
            >
              About
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleonclick("#work-history")}
            >
              Work History
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleonclick("#skills")}
            >
              Skills
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleonclick("#portfolio")}
            >
              Portfolio
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleonclick("#achievements")}
            >
              Achievements
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleonclick("#get-in-touch")}
            >
              Contact
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
