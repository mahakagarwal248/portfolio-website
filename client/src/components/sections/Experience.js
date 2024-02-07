import ExperienceCard from "../general/ExperienceCard";
import experienceImage1 from "../../assets/experience_1.jpg";

const experienceData = [
  {
    title: "Associate Technology",
    company: "TCZ Digital Private Limited",
    department: "MERN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    date: "September 2022 - Present",
  },
  {
    title: "Intern",
    company: "TCZ Digital Private Limited",
    department: "MERN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    date: "July 2022 - September - 2022",
  },
];
function Experience() {
  return (
    <div id="work-history" className="bg-white py-16">
      <p className="text-5xl font-bold">WORK HISTORY</p>
      <div className="mt-16 w-4/5 m-auto">
        <div className="flex flex-row">
          <div className="flex-1">
            <ExperienceCard
              title={experienceData[0].title}
              company={experienceData[0].company}
              department={experienceData[0].department}
              description={experienceData[0].description}
            />
          </div>
          <div className="bg-blue-950 w-2">
            <img
              src={experienceImage1}
              alt="experience"
              className="h-20 w-20 absolute"
              style={{ marginLeft: "-36px" }}
            />
          </div>
          <div className="flex-1 text-left">
            <p className="ml-14 mt-5 text-xl italic">
              {experienceData[0].date}
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex-1 text-right pt-10">
            <p className="mr-14 mt-5 text-xl italic">
              {experienceData[1].date}
            </p>
          </div>
          <div className="bg-blue-950 w-2 pt-10">
            <img
              src={experienceImage1}
              alt="experience"
              className="h-20 w-20 absolute"
              style={{ marginLeft: "-36px" }}
            />
          </div>
          <div className="flex-1 pt-10">
            <ExperienceCard
              title={experienceData[1].title}
              company={experienceData[1].company}
              department={experienceData[1].department}
              description={experienceData[1].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
