function EducationComp({ level, institute, year, marks }) {
  return (
    <div>
      <p className="text-blue-500 text-lg font-semibold mt-3 flex flex-row items-center">
        <lord-icon
          src="https://cdn.lordicon.com/vduvxizq.json"
          trigger="loop"
          delay="1000"
          colors="primary:#3080e8"
          style={{ width: "32px", marginRight:"5px" }}
        ></lord-icon>
        {level}
      </p>
      <p className="pl-6 text-md">{institute}</p>
      <p className="pl-6 text-md">{year}</p>
      <p className="pl-6 text-md">{marks}</p>
    </div>
  );
}

export default EducationComp;
