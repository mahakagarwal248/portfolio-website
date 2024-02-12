import redirectImage from "../../assets/redirect.png";
function PortfolioCard({ text, imageUrl, redirectUrl }) {
  const handleClick = (path) => {
    window.open(path, "_blank");
  };
  return (
    <div className="mt-10 text-left flex-full sm:flex-half lg:flex-oneThird shadow-2xl overflow-hidden mx-4 border-2 border-black rounded-xl">
      <img
        src={imageUrl}
        alt="website"
        className="h-80 hover:scale-105 transition duration-700 transform origin-center cursor-pointer"
      />
      <div className="p-3 flex flex-row items-center">
        <p className="text-xl font-bold w-3/5">{text}</p>
        <img
          src={redirectImage}
          alt="redirect"
          className="h-8 w-8 ml-auto cursor-pointer"
          onClick={() => handleClick(redirectUrl)}
        />
      </div>
    </div>
  );
}

export default PortfolioCard;
