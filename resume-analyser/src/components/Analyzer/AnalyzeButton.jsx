function AnalyzeButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        w-full bg-gradient-to-r
        from-blue-600 to-indigo-600
        text-white py-3 rounded-xl
        font-semibold shadow-md
        hover:scale-105 transition
      "
    >
      {loading ? "Analyzing..." : "Analyze Resume"}
    </button>
  );
}

export default AnalyzeButton;
