import profileImage from "../../assets/profile.png";
import EducationComp from "../general/EducationComp";

const educationData = [
  {
    level: "Bachelor Of Technology - Computer Science & Engineering",
    institue:
      "Shri Ram Murti Smarak College of Engineering & Technology,Bareilly",
    year: "2019-2023",
    marks: "CGPA - 8.2",
  },
  {
    level: "Intermediate",
    institue: "Saraswati Balika Vidya Mandir Inter College, Bareilly",
    year: "2017-2018",
    marks: "Percentage - 81.2",
  },
];
function About() {
  return (
    <div id="about" className="bg-white py-16">
      <div className="flex flex-col md:flex-row border-2 w-4/5 m-auto py-16 px-9 shadow-2xl shadow-gray-400 rounded-lg">
        <div className="flex-full md:flex-1 md:pr-8">
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row">
            <div className="w-full sm:w-2/5 md:w-full lg:sm:w-2/5 mr-5">
              <img
                src={profileImage}
                alt="profile"
                className="w-44 sm:w-full md:w-40 lg:w-full xl:w-3/5 border-2 border-black rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between w-full sm:w-3/5 md:w-full lg:w-3/5 mt-5 sm:mt-0 md:mt-5 lg:mt-0 text-left">
              <p>
                <b>Name :</b> Mahak Agarwal
              </p>
              <p>
                <b>Profile :</b> MERN Stack Developer
              </p>
              <p>
                <b>Email :</b> mahakagarwal248@gmail.com
              </p>
              <p>
                <b>Phone :</b> +91 8941027873
              </p>
            </div>
          </div>
          <div className="text-left mt-6">
            <p className="font-semibold text-2xl">Education</p>
            <div>
              {educationData.map((education, index) => (
                <EducationComp
                  key={index}
                  level={education.level}
                  institute={education.institue}
                  year={education.year}
                  marks={education.marks}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-full md:flex-1 text-left md:pl-8 mt-5 md:mt-0">
          <p className="text-4xl font-semibold">About Me</p>
          <hr className="my-1 border-t-4 border-blue-600 w-20" />
          <p className="mt-6 text-lg">
            I am a proficient MERN Stack Developer currently employed at
            TechChefz Digital Private Limited since September 2022. Prior to my
            current position, I completed an internship within the same capacity
            at the same esteemed company.
          </p>
          <p className="mt-4 text-lg">
            Throughout my career, I have actively contributed to various
            projects. My adeptness with the MERN Stack, combined with a strong
            problem-solving acumen, has enabled me to ensure the successful
            execution of tasks and projects.
          </p>
          <p className="mt-4 text-lg">
            Looking ahead, I am eager to continue leveraging my skills and
            experience to drive innovation and contribute to the success of
            future projects and initiatives within the realm of web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
