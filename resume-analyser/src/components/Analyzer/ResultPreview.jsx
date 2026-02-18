function ResultPreview({ data }) {
  return (
    <div className="
      bg-white shadow-md
      p-6 rounded-xl mt-6
    ">

      <h2 className="text-xl font-semibold mb-6">
        Analysis Result
      </h2>

      {/* Score */}
      <div className="mb-6">

        <p className="text-gray-600">
          Match Score
        </p>

        <h3 className="
          text-4xl font-bold
          text-blue-600 mt-1
        ">
          {data.score}%
        </h3>

      </div>

      {/* Matched Skills */}
      <div className="mb-6">

        <p className="font-semibold mb-2">
          Matched Skills
        </p>

        <div className="flex flex-wrap gap-2">

          {data.matched_skills.map((skill, i) => (
            <span
              key={i}
              className="
                bg-green-100 text-green-600
                px-3 py-1 rounded-full text-sm
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* Missing Skills */}
      <div className="mb-6">

        <p className="font-semibold mb-2">
          Missing Skills
        </p>

        <div className="flex flex-wrap gap-2">

          {data.missing_skills.map((skill, i) => (
            <span
              key={i}
              className="
                bg-red-100 text-red-600
                px-3 py-1 rounded-full text-sm
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* Recommendations */}
      <div>

        <p className="font-semibold mb-2">
          Recommendations
        </p>

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
