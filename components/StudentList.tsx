import { students } from "@/mockData/students";
import React from "react";
import StudentCard from "./StudentCard";

type StudentListProps = {
  selectedStudent: number;
  setSelectedStudent: (id: number) => void;
};

const StudentList: React.FC<StudentListProps> = ({
  selectedStudent,
  setSelectedStudent,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-gray-300 text-[.6rem] font-bold">CANDIDATE</p>
        <p className="text-gray-300 text-[.6rem] font-bold">SCORE</p>
      </div>

      <div className="mt-2 flex-col gap-1">
        {students.map((s) => (
          <StudentCard
            key={s.id}
            data={s}
            selectedStudent={selectedStudent}
            setSelectedStudent={setSelectedStudent}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
