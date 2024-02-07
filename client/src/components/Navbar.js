import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
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
  return (
    <div className="flex flex-row bg-black opacity-90 h-16 text-white items-center">
      <div className="text-left flex-1 pl-8">
        <p className="text-xl font-bold">{"<Mahak Agarwal />"}</p>
      </div>
      <div className="flex flex-row flex-1 justify-evenly text-lg pr-24">
        <p className="cursor-pointer" onClick={() => handleonclick("/")}>
          Home
        </p>
        <p className="cursor-pointer" onClick={() => handleonclick("#about")}>
          About
        </p>
        <p
          className="cursor-pointer"
          onClick={() => handleonclick("#work-history")}
        >
          Work History
        </p>
        <p className="cursor-pointer" onClick={() => handleonclick("#skills")}>
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
          onClick={() => handleonclick("#get-in-touch")}
        >
          Contact
        </p>
      </div>
    </div>
  );
}

export default Navbar;
