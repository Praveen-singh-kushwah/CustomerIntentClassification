import React, { useState } from "react";

const DatasetUploadPage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = ["text/csv", "application/json", "text/plain"];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Invalid file type. Please upload a CSV, JSON, or TXT file.");
      return;
    }

    if (selectedFile.size > maxSize) {
      setError("File size exceeds 5 MB. Please upload a smaller file.");
      return;
    }

    setFile(selectedFile);
    setError("");
    setSuccessMessage("File selected successfully!");
  };

  const handleUpload = () => {
    if (!file) {
      setError("No file selected for upload.");
      return;
    }

    // Simulate file upload (replace with API call)
    console.log("Uploading file:", file);
    setSuccessMessage(`File "${file.name}" uploaded successfully!`);
    setFile(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Upload Your Dataset</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center justify-center">
        {/* File Input Section */}
        <div className="">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mt-2 text-center">{successMessage}</p>
          )}
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!file}
          className={`mt-4 px-6 py-2 rounded-md font-bold text-white ${
            file
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Upload
        </button>
      </div>

      {/* File Requirements Section */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">File Requirements:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Accepted formats: CSV, JSON, TXT</li>
          <li>Maximum file size: 5 MB</li>
          <li>
            CSV files should have <code>intent</code> and <code>text</code>{" "}
            columns
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DatasetUploadPage;
