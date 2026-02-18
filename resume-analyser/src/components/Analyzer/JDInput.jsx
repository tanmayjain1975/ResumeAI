function JDInput() {
  return (
    <div className="
      bg-white shadow-sm
      p-6 rounded-xl
    ">

      <h3 className="font-semibold mb-3">
        Job Description
      </h3>

      <textarea
        rows="10"
        placeholder="Paste job description here..."
        className="
          w-full border rounded-lg
          p-3 focus:outline-none
          focus:ring-2 focus:ring-blue-500
        "
      />

    </div>
  );
}

export default JDInput;
