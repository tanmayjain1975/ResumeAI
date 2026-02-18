function HowItWorks() {
  return (
    <section className="py-20 bg-light text-center">
      <h2 className="text-3xl font-bold text-secondary">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-10 px-6">

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-primary text-2xl font-bold">1</h3>
          <p className="mt-3">Upload Resume</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-primary text-2xl font-bold">2</h3>
          <p className="mt-3">Paste Job Description</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-primary text-2xl font-bold">3</h3>
          <p className="mt-3">Get AI Analysis</p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
