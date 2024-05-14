import React from "react";

type Student = {
  id: number;
  name: string;
  image: string;
  email: string;
  total: number;
  behavioural: number;
  communication: number;
  situationHandling: number;
  about: string;
  experience: string;
  hobbies: string;
  introduction: string;
};

type StudentCardProps = {
  data: Student;
  selectedStudent: number;
  setSelectedStudent: (id: number) => void;
};

const StudentCard: React.FC<StudentCardProps> = ({
  data,
  selectedStudent,
  setSelectedStudent,
}) => {
  return (
    <div
      onClick={() => setSelectedStudent(data.id)}
      className="flex items-center justify-between cursor-pointer"
      style={{
        backgroundColor: selectedStudent === data.id ? "#f0f0f0" : "#fff",
      }}
    >
      <div className="flex gap-2 items-center">
        <div className="h-10 w-10 overflow-hidden rounded-3xl">
          <img className="h-full w-full" src={data.image} alt={data.name} />
        </div>
        <div>
          <p className="font-bold text-[.65rem]">{data.name}</p>
          <p className="font-light text-gray-400 text-[.65rem]">{data.email}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold">{data.total}</p>
      </div>
    </div>
  );
};

export default StudentCard;
