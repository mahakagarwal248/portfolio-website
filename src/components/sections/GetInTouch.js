import contactBg from "../../assets/contactBg.jpg";
import locationIcon from "../../assets/location.png";
import callIcon from "../../assets/call.png";
import emailIcon from "../../assets/email.png";
function GetInTouch() {
  return (
    <div id="get-in-touch" className="bg-white py-10">
      <div
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-10 bg-blur">
          <div className="w-4/5 m-auto bg-white flex flex-col-reverse md:flex-row p-8">
            <div className="flex-1 text-left md:pr-8 flex flex-col mt-8 md:mt-0">
              <p className="text-4xl font-semibold">Send Message</p>
              <hr className="my-1 border-t-4 border-blue-600 w-28" />
              <input
                type="text"
                placeholder="Your Name"
                className="border-2 border-gray-400 p-2 mt-7"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="border-2 border-gray-400 p-2 mt-3"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="border-2 border-gray-400 p-2 mt-3"
              />
              <textarea
                type="text"
                placeholder="Your Message"
                className="border-2 border-gray-400 p-2 mt-3"
              />
              <button className="mt-8 py-2 w-36 m-auto rounded-xl border-0 bg-blue-600 text-white text-lg">
                Send Message
              </button>
            </div>
            <div className="flex-1 text-left md:pl-8">
              <p className="text-4xl font-semibold">Get In Touch</p>
              <hr className="my-1 border-t-4 border-blue-600 w-32" />
              <p className="mt-6 text-lg">
                Let's collaborate! With expertise in MERN Stack development,
                problem-solving skills, and a passion for innovation, I'm ready
                to contribute to your projects. Reach out today to discuss how
                we can work together towards your goals.
              </p>
              <div className="flex flex-row items-center mt-6">
                <img
                  src={locationIcon}
                  alt="location"
                  className="h-5 w-5 mr-2"
                />
                <p className="m-0">
                  78, Garaiya, Bara Bazar, Bareilly, Uttar Pradesh, India,
                  243001
                </p>
              </div>
              <div className="flex flex-row items-center mt-3">
                <img src={callIcon} alt="location" className="h-5 w-5 mr-2" />
                <p className="m-0">+91 8941027873</p>
              </div>
              <div className="flex flex-row items-center mt-3">
                <img src={emailIcon} alt="location" className="h-5 w-5 mr-2" />
                <p className="m-0 break-all">mahakagarwal248@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
