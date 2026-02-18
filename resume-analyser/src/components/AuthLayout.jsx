function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* Left Branding Panel */}
      <div className="
        hidden md:flex flex-col justify-center items-center
        bg-gradient-to-r from-blue-600 to-indigo-700
        text-white p-10
      ">
        <h1 className="text-4xl font-bold mb-4">
          ResumeAI
        </h1>

        <p className="text-lg text-center max-w-md">
          Analyze your resume, find skill gaps,
          and get job-ready with AI-powered insights.
        </p>

        <img
          src="https://illustrations.popsy.co/gray/artificial-intelligence.svg"
          alt="AI"
          className="mt-10 w-80"
        />
      </div>

      {/* Right Form Panel */}
      <div className="flex justify-center items-center bg-gray-50 p-6">
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;
