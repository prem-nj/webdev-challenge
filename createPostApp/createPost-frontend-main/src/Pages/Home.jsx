import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";

const Form = () => {
  const navigate = useNavigate();

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await axios.post(
        `${API_URL}/create-post`,
        formData
      );

      console.log(res.data);
      navigate("/feed");
    } catch (error) {
      console.error("Upload failed:", error);
    }

    console.log("Image:", formData.get("image"));
    console.log("Caption:", formData.get("caption"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6"
    >
      <p className="text-2xl font-bold text-gray-800">
        Upload a file
      </p>

      <p className="text-gray-500 mt-2">
        Attach the file below
      </p>

      <input
        type="file"
        name="image"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />

      <label
        htmlFor="fileInput"
        className="mt-5 flex flex-col items-center justify-center w-full p-10 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition"
      >
        <span className="text-5xl">📁</span>

        <span className="mt-4 text-lg font-semibold text-gray-800 text-center">
          {fileName
            ? `Selected file: ${fileName}`
            : "Drag file(s) here to upload"}
        </span>

        <span className="mt-2 text-center text-gray-500">
          Alternatively, you can select a file by <br />
          <strong className="text-green-500">
            clicking here
          </strong>
        </span>
      </label>

      <div className="mt-6">
        <label
          htmlFor="caption"
          className="block mb-2 font-medium text-gray-700"
        >
          Caption
        </label>

        <input
          type="text"
          id="caption"
          name="caption"
          placeholder="Write a caption..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
      >
        Upload File
      </button>
    </form>
  );
};

export default Form;