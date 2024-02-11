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
                className="w-44 sm:w-full md:w-40 lg:w-full border-2 border-black rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between w-full sm:w-3/5 md:w-full lg:w-3/5 mt-5 sm:mt-0 md:mt-5 lg:mt-0 text-left">
              <p>
                <b>Name :</b> Mahak Agarwal
              </p>
              <p>
                <b>Profile :</b> Mahak Agarwal
              </p>
              <p>
                <b>Email :</b> Mahak Agarwal
              </p>
              <p>
                <b>Phone :</b> Mahak Agarwal
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
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Nulla porttitor accumsan tincidunt.
          </p>
          <p className="mt-6 text-lg">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
            suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
            sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
          </p>
          <p className="mt-6 text-lg">
            Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut
            lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
