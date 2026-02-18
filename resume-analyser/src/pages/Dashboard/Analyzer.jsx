import { useState } from "react";
import axios from "axios";

import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";

import UploadBox from "../../components/Analyzer/UploadBox";
import JDInput from "../../components/Analyzer/JDInput";
import AnalyzeButton from "../../components/Analyzer/AnalyzeButton";
import ResultPreview from "../../components/Analyzer/ResultPreview";

function Analyzer() {

  const [file, setFile] = useState(null);
  const [jdText, setJdText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleAnalyze = async () => {

    if (!file || !jdText) {
      alert("Upload resume & enter JD");
      return;
    }

    const formData = new FormData();

    formData.append("resume", file);
    formData.append("jd", jdText);

    try {

      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:5000/analyze",
        formData
      );

      setResult(res.data);

    } catch (err) {

      console.error(err);
      alert("Analysis failed");

    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-6">

          <h1 className="text-2xl font-bold mb-6">
            Resume Analyzer
          </h1>

          <div className="grid lg:grid-cols-2 gap-6">

            <UploadBox
              file={file}
              setFile={setFile}
            />

            <JDInput
              jdText={jdText}
              setJdText={setJdText}
            />

          </div>

          <div className="mt-6">
            <AnalyzeButton
              onClick={handleAnalyze}
              loading={loading}
            />
          </div>

          <ResultPreview data={result} />

        </div>

      </div>

    </div>
  );
}

export default Analyzer;
