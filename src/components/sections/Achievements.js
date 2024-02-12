const achievementsData = [
  {
    description:
      "Certificate of Developing Back-End Apps with Node.js and Express powered by IBM and coursera",
    link: "https://drive.google.com/file/d/1lHye9iDwDK0Q6tcKSfVU974F_HtpuTCG/view?usp=sharing",
  },
  {
    description:
      "Certificate of winning UP POLICE HACKATHON 2022 on the problem statement of CROWD COUNTING",
    link: "https://drive.google.com/file/d/1JhoAcTSQ2BgluzPn8KEtuc-bm3VyGIcp/view?usp=share_link",
  },
  {
    description: "Certificate of FULL STACK DEVELOPMENT course by udemy.",
    link: "https://drive.google.com/file/d/18O3Mby98ilYx6UnMJv_e-DFvxFvQgsYz/view?usp=sharing",
  },
  {
    description: "Certificate of Java introduction course by coursera.",
    link: "https://drive.google.com/file/d/1_ES7Bn8tkFb-NEDQi3mrmZ6OTQxonPdV/view?usp=sharing",
  },
];
function Achievements() {
  const onViewClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div id="achievements" className="bg-white py-16 bo">
      <div className="md:w-4/5 w-11/12 m-auto bg-white border-2 py-10 px-5 shadow-2xl shadow-gray-400 rounded-lg">
        <p className="md:text-5xl font-bold text-4xl">ACHIEVEMENTS</p>
        <p className="text-md mt-2 ">My achievements throughout my journey</p>
        <div className="mt-10 text-left ">
          {achievementsData?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center my-3 text-left"
            >
              <p className="m-0 mr-2 w-full text-md font-semibold">
                <lord-icon
                  src="https://cdn.lordicon.com/vduvxizq.json"
                  trigger="loop"
                  delay="1000"
                  colors="primary:#3080e8"
                  style={{
                    width: "32px",
                    marginRight: "5px",
                    verticalAlign: "middle",
                  }}
                ></lord-icon>
                {item?.description}
              </p>
              <button
                className="text-blue-500 bg-none border-0 text-sm underline mr-auto mb-2 mt-1 md:my-0 md:ml-auto whitespace-nowrap"
                onClick={() => onViewClick(item?.link)}
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
