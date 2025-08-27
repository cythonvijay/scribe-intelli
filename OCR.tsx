import React, { useState } from "react";

const OCR: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("https://api.ocr.space/parse/image", {
        method: "POST",
        headers: {
          apikey: process.env.REACT_APP_OCR_API_KEY as string,
        },
        body: formData,
      });

      const data = await response.json();
      setResult(data?.ParsedResults?.[0]?.ParsedText || "No text found!");
    } catch (error) {
      console.error(error);
      setResult("Error while processing OCR.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">OCR Text Extractor</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Upload & Extract
      </button>
      <div className="mt-4">
        <h2 className="font-semibold">Extracted Text:</h2>
        <pre className="bg-gray-100 p-3 rounded">{result}</pre>
      </div>
    </div>
  );
};

export default OCR;
