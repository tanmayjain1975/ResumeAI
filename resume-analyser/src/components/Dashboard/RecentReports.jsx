function RecentReports() {
  const reports = [
    { role: "Frontend Developer", score: "78%" },
    { role: "React Developer", score: "85%" },
    { role: "Full Stack Developer", score: "72%" },
  ];

  return (
    <div className="
      bg-white shadow-md
      p-6 rounded-xl mt-6
    ">

      <h2 className="font-semibold mb-4">
        Recent Reports
      </h2>

      <div className="space-y-3">
        {reports.map((r, i) => (
          <div
            key={i}
            className="
              flex justify-between
              border-b pb-2
            "
          >
            <span>{r.role}</span>
            <span className="text-primary font-bold">
              {r.score}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RecentReports;
