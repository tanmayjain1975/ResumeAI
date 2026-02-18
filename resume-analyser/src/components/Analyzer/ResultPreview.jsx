function ResultPreview({ data }) {

  if (!data) return null;

  return (
    <div className="
      bg-white shadow-md
      p-6 rounded-xl mt-6
    ">

      <h2 className="text-xl font-semibold mb-6">
        AI Resume Analysis Report
      </h2>

      {/* SCORE DASHBOARD */}
      <div className="
        grid md:grid-cols-3 gap-6 mb-8
      ">

        <ScoreCard
          title="Resume Match Score"
          value={`${data.score}%`}
          color="blue"
        />

        <ScoreCard
          title="ATS Compatibility"
          value={`${data.ats_score}%`}
          color="green"
        />

        <ScoreCard
          title="Skill Gap"
          value={`${data.skill_gap}%`}
          color="red"
        />

      </div>

      {/* MATCHED SKILLS */}
      <SkillSection
        title="Matched Skills"
        skills={data.matched_skills}
        color="green"
      />

      {/* MISSING SKILLS */}
      <SkillSection
        title="Missing Skills"
        skills={data.missing_skills}
        color="red"
      />

      {/* RECOMMENDATIONS */}
      <div className="mt-6">

        <h3 className="font-semibold mb-2">
          AI Recommendations
        </h3>

        <ul className="list-disc pl-6 text-gray-700">

          {data.recommendations.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}

        </ul>

      </div>

    </div>
  );
}

export default ResultPreview;



/* SCORE CARD COMPONENT */

function ScoreCard({ title, value, color }) {

  const colors = {
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600"
  };

  return (
    <div className="
      bg-gray-50 p-6
      rounded-xl shadow-sm
      text-center
    ">

      <p className="text-gray-600 text-sm">
        {title}
      </p>

      <h3 className={`
        text-3xl font-bold mt-2
        ${colors[color]}
      `}>
        {value}
      </h3>

    </div>
  );
}



/* SKILL SECTION */

function SkillSection({ title, skills, color }) {

  const colors = {
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600"
  };

  return (
    <div className="mb-6">

      <h3 className="font-semibold mb-2">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">

        {skills.map((skill, i) => (
          <span
            key={i}
            className={`
              px-3 py-1 rounded-full text-sm
              ${colors[color]}
            `}
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}
