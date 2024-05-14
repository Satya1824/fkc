import { students } from "@/mockData/students";
import React from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-gray-300 text-[.6rem] font-bold">CANDIDATE</p>
        <p className="text-gray-300 text-[.6rem] font-bold">SCORE</p>
      </div>

      <div className="mt-2">
        {students.map((s) => (
          <StudentCard key={s.id} data={s} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
