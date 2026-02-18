function UploadBox({ file, setFile }) {

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="
      border-2 border-dashed border-gray-300
      p-10 rounded-xl text-center
      bg-white shadow-sm
    ">

      <h3 className="font-semibold mb-2">
        Upload Resume
      </h3>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mt-4"
      />

      {file && (
        <p className="text-sm mt-2 text-green-600">
          {file.name}
        </p>
      )}

    </div>
  );
}

export default UploadBox;
