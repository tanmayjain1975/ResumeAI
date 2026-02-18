function Features() {
  const data = [
    {
      title: "AI Resume Analysis",
      desc: "Smart NLP algorithms analyze resumes deeply.",
    },
    {
      title: "Match Score",
      desc: "Get accurate resume vs job match percentage.",
    },
    {
      title: "Skill Suggestions",
      desc: "Identify missing skills instantly.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-secondary">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">

          {data.map((item, i) => (
            <div
              key={i}
              className="
                bg-white p-8 rounded-2xl
                shadow-md hover:shadow-xl
                transition hover:-translate-y-2
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;
