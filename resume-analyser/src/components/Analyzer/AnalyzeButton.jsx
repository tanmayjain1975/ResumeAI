function AnalyzeButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full bg-gradient-to-r
        from-blue-600 to-indigo-600
        text-white py-3 rounded-xl
        font-semibold shadow-md
        hover:scale-105 transition
      "
    >
      Analyze Resume
    </button>
  );
}

export default AnalyzeButton;
