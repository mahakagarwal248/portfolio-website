import rightArrow from "../../assets/right-arrow.png";
function EducationComp({ level, institute, year, marks }) {
  return (
    <div>
      <p className="text-blue-500 text-lg font-semibold mt-3 flex flex-row items-center">
        <img src={rightArrow} alt="arrow" className="h-6 w-6" />
        {level}
      </p>
      <p className="pl-6 text-md">{institute}</p>
      <p className="pl-6 text-md">{year}</p>
      <p className="pl-6 text-md">{marks}</p>
    </div>
  );
}

export default EducationComp;
