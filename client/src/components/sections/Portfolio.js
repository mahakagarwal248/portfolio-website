import PortfolioCard from "../general/PortfolioCard";
import olpImage from "../../assets/olp.png";
import ecommImage from "../../assets/ecomm.png";
import unnatiImage from "../../assets/unnati.png";
import easyCoderImage from "../../assets/easycoder.png";
import stackoverflowImage from "../../assets/stackoverflow.png";

const portfolioData = [
  {
    text: "It's an Online Learning Platform Website",
    imageUrl: olpImage,
    redirectUrl: "http://insight-learn.easycoder.tech/",
  },
  {
    text: "It's an E-commerce Shopping Website",
    imageUrl: ecommImage,
    redirectUrl: "http://ecomm.easycoder.tech/",
  },
  {
    text: "This one is a service provider Web App.",
    imageUrl: unnatiImage,
    redirectUrl: "https://marvelous-wisp-e66b4b.netlify.app/",
  },
  {
    text: "This one is a Freelancing Portfolio Website.",
    imageUrl: easyCoderImage,
    redirectUrl: "http://easycoder.tech/",
  },
  {
    text: "It is the clone of stackoverflow website.",
    imageUrl: stackoverflowImage,
    redirectUrl: "https://a-stackoverflow-clone.netlify.app/",
  },
];
function Portfolio() {
  return (
    <div id="portfolio" className="bg-white py-8">
      <div className="py-10 w-11/12 m-auto">
        <p className="text-5xl font-bold">PORTFOLIO</p>
        <p className="text-md mt-2">
          Here is some sample of my work. All projects are done using MERN Stack
        </p>
        <div className="flex flex-row flex-wrap justify-center w-full sm:w-3/5 lg:w-full m-auto">
          {portfolioData.map((data, index) => (
            <PortfolioCard
              key={index}
              text={data.text}
              imageUrl={data.imageUrl}
              redirectUrl={data.redirectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
