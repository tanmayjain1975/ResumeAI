import { useState } from "react";

import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";

import UploadBox from "../../components/Analyzer/UploadBox";
import JDInput from "../../components/Analyzer/JDInput";
import AnalyzeButton from "../../components/Analyzer/AnalyzeButton";
import ResultPreview from "../../components/Analyzer/ResultPreview";

function Analyzer() {
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    // Dummy backend response
    const response = {
      score: 78,
      matched_skills: ["React", "JavaScript", "HTML", "CSS"],
      missing_skills: ["Docker", "AWS", "Kubernetes"],
      recommendations: [
        "Learn Docker fundamentals",
        "Get AWS Cloud Practitioner certification",
        "Practice Kubernetes deployments"
      ]
    };

    setResult(response);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Header />

        <div className="p-6">

          <h1 className="text-2xl font-bold mb-6">
            Resume Analyzer
          </h1>

          {/* Upload + JD */}
          <div className="grid lg:grid-cols-2 gap-6">
            <UploadBox />
            <JDInput />
          </div>

          {/* Analyze Button */}
          <div className="mt-6">
            <AnalyzeButton onClick={handleAnalyze} />
          </div>

          {/* Result Section */}
          {result && <ResultPreview data={result} />}

        </div>
      </div>
    </div>
  );
}

export default Analyzer;
