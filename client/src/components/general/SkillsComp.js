function SkillsComp({ text, percentage }) {
  return (
    <div className="flex-half px-5 mt-4">
      <div className="flex justify-between w-11/12">
        <p className="text-lg font-semibold text-white">{text}</p>
        <p className="text-lg text-white">{percentage}</p>
      </div>
      <div className="h-4 border-2 border-white rounded-xl p-0 w-11/12 overflow-hidden">
        <hr
          className="h-full border-t-0 "
          style={{ width: percentage, background:"rgb(255, 163, 26)" }}
        />
      </div>
    </div>
  );
}

export default SkillsComp;
