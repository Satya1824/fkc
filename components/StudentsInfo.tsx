"use client";

import React, { useState } from "react";
import StudentList from "./StudentList";

const StudentsInfo = () => {
  const [selectedStudent, setSelectedStudent] = useState(1);

  return (
    <div className="bg-red-300">
      <p className="text-xs">
        <span className="ml-3 font-thin">Pages</span> / Assignment
      </p>
      <p className="text-xs font-bold ml-3 mt-1">Sales BDE</p>

      <div className="flex mt-4">
        <div className="bg-white p-3 rounded-xl w-[300px]">
          <div className="flex items-center justify-between">
            <p className="font-bold text-base">Sales BDE</p>
            <p className="font-bold text-base text-green-400">Active</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="font-bold text-xs text-gray-400">Assignment Link</p>
            <a href="#" className="font-bold text-xs text-blue-400">
              https://tiny.url/asknakdna/
            </a>
          </div>

          <div className="flex items-center justify-between mt-2">
            <p className="font-bold text-xs text-gray-400">Assignment Hour</p>
            <a href="#" className="font-bold text-xs text-gray-400">
              3 hours
            </a>
          </div>

          <div className="flex items-center justify-between mt-2">
            <p className="font-bold text-xs text-gray-400">
              Assignment Ends At
            </p>
            <a href="#" className="font-bold text-xs text-gray-400">
              11 March 2024
            </a>
          </div>

          <div className="flex gap-5 mt-10">
            <button className="text-black font-semibold text-[.6rem] bg-white shadow-md py-2 px-7 rounded-full">
              TO REVIEW
            </button>
            <button className="text-black font-semibold text-[.6rem]">
              SHORTLISTED
            </button>
          </div>

          <div className="mt-5">
            <StudentList
              selectedStudent={selectedStudent}
              setSelectedStudent={setSelectedStudent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsInfo;
