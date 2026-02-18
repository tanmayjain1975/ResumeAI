function UploadBox() {
  return (
    <div className="
      border-2 border-dashed border-gray-300
      p-10 rounded-xl text-center
      bg-white shadow-sm
      hover:border-blue-500 transition
    ">

      <h3 className="font-semibold mb-2">
        Upload Resume
      </h3>

      <p className="text-gray-500 text-sm">
        Drag & Drop or Select File
      </p>

      <input
        type="file"
        className="mt-4"
      />

    </div>
  );
}

export default UploadBox;
