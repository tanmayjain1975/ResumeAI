function Hero() {
  return (
    <section className="bg-light pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
            Analyze Your Resume with AI &
            <span className="text-primary"> Get Job-Ready</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Upload your resume, compare with job descriptions,
            and discover missing skills instantly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white px-8 py-3 rounded-xl
              shadow-lg hover:scale-105 transition
            ">
              Get Started Free
            </button>

            <button className="
              border border-blue-600 text-blue-600
              px-8 py-3 rounded-xl
              hover:bg-blue-600 hover:text-white transition
            ">
              View Demo
            </button>

          </div>
        </div>

        <img
          src="https://illustrations.popsy.co/gray/artificial-intelligence.svg"
          alt="AI"
          className="w-full"
        />

      </div>
    </section>
  );
}

export default Hero;
