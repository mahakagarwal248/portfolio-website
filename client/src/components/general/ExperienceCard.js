function ExperienceCard({ title, company, department, description }) {
  return (
    <div className="w-3/5 m-auto p-5 text-left shadow-xl shadow-gray-400">
      <p className="text-3xl font-semibold">{title}</p>
      <p className="text-xl my-1 font-semibold">{company}</p>
      <p className="text-xl my-1 font-semibold">Department - {department}</p>
      <p className="mt-4">{description}</p>
    </div>
  );
}

export default ExperienceCard;
