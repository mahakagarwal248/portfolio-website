import SkillsComp from "../general/SkillsComp";
import background from "../../assets/skillsBg.jpg";

const skilllsData = [
  { text: "Node.Js", percentage: "95%" },
  { text: "React.Js", percentage: "80%" },
  { text: "MongoDB", percentage: "90%" },
  { text: "Express.Js", percentage: "85%" },
  { text: "MERN Stack", percentage: "95%" },
  { text: "JavaScript", percentage: "90%" },
  { text: "GitHub", percentage: "90%" },
  { text: "HTML/CSS", percentage: "80%" },
  { text: "Bootstrap", percentage: "95%" },
  { text: "Tailwind CSS", percentage: "100%" },
  { text: "ElasticSearch", percentage: "60%" },
  { text: "Redis", percentage: "80%" },
  { text: "AWS", percentage: "50%" },
  { text: "Postman", percentage: "100%" },
];
function Skills() {
  return (
    <div id="skills" className="py-10 bg-white">
      <div
        className=""
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-10 bg-blur">
          <div className="w-11/12 md:w-4/5 m-auto">
            <p className="text-4xl md:text-5xl font-bold text-white">SKILLS</p>
            <p className="text-md mt-2 text-white">
              Skills and the profficiency in each skill
            </p>
            <div className="flex flex-row flex-wrap mt-10">
              {skilllsData.map((skill, index) => (
                <SkillsComp
                  key={index}
                  text={skill.text}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
