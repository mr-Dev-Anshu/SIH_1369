import React from "react";
import { useState } from "react";
import ProjectDataService from "../services/ProjectServices";

export default function Upload_Project() {
  const [url, setUrl] = useState("");
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setUrl(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = formData;
    console.log(newRecord);
    try {
      await ProjectDataService.addProject(newRecord);
      console.log("Project Added!!");
    } catch (e) {
      console.log("project  Didn't added !!!");
    }
  };
  return (
    <form className="pl-40 pr-40 h-fit rounded-xl font-medium" onSubmit={handleSubmit}>
      <div className="flex justify-center shadow-xl rounded-xl">
        <div className="flex justify-center w-4/6">
          <div className="mt-12 flex flex-col gap-4 w-full   ">
            <div className="font-semibold font-serif bg-blue-500 text-white uppercase text-xl flex justify-center outline py-2 px-2 rounded-xl outline-slate-200">
              Upload Your Project Here{" "}
            </div>
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="text"
              id="project-name"
              placeholder="Project Title"
              onChange={handleChange}
              required
            />
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="text"
              id="team-name"
              placeholder="Enter the  TeamName"
              onChange={handleChange}
              required
            />
            <select
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              name="domain"
              id="domainName"
              required
            >
              <option value="not defined" selected>
                Select Domain
              </option>
              <option value="CS">Computer Science</option>
              <option value="AI">Artificial Engineering</option>
              <option value="Civil">Civil Engineering</option>
              <option value="Mechanical">Mechanical Engineering</option>
              <option value="DS">Data Science</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Medical">Medical Sciences</option>
              <option value="N/A">Others</option>
            </select>
            <textarea
              className="border p-3 rounded-lg resize-none  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              name=""
              id=""
              cols="30"
              rows="20"
              placeholder="Project Description (minimum 500 words.)"
              minLength={500}
            ></textarea>
            <label htmlFor="documents">
              Upload project related documents [ Merge all documents in one pdf
              file ]
            </label>
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="documents"
            />
            <label htmlFor="documents">
              <p>
                Upload project related Images ["image should be less than
                500kb"]{" "}
              </p>
            </label>
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="images"
            />
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="images"
            />
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="images"
            />
            <input
              className={`border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full ${
                url.length > 0 ? `border-blue-600` : `text-black`
              }`}
              type="text"
              id="git-link"
              placeholder="Paste youtube video link here"
              onChange={handleChange}
            />
            <input
              className={`border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full ${
                url.length > 0 ? `border-blue-600` : `text-black`
              }`}
              type="text"
              id="git-link"
              placeholder="Paste github link here (if any)"
              onChange={handleChange}
            />
            <input
              type="text"
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              placeholder="Project Reference details (if any)"
              id="reference"
              required
            />
            <input
              type="text"
              id="college"
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              placeholder="College/University Name (write N/A in case of individual project.)"
              required
            />
            <input
              type="text"
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              placeholder="Mentor's name"
              id="mentorName"
              required
            />
            <input
              type="email"
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              placeholder="Mentor's Email"
              id="mentorEmail"
              required
            />
            <div className="flex gap-4">
              <input type="checkbox" required />{" "}
              <p className=" text-xs">Agree to the terms and conditions</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" required />{" "}
              <p className=" text-xs">Details filled are all true.</p>
            </div>
            <button className="outline rounded-xl outline-slate-200 hover:bg-blue-700 hover:text-white uppercase font-bold text-slate-500 text-xl mb-6 transition-all duration-300 py-2 px-3 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
