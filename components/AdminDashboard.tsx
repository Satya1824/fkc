import { Home } from "lucide-solid";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="h-[100dvh] w-[250px] pt-2">
      <h1 className="font-semibold text-base">Hi, AltWorld</h1>

      <hr className="mt-4" />

      <div>
        <div>
          {/* <Home color="#4fd1c5" size={20} /> */}
          <p className="text-sm font-semibold mt-7">Dashboard</p>
        </div>
      </div>

      <div className="bg-[#4fd1c5] rounded-xl p-5 mt-7">
        <button className="bg-white rounded-xl h-8 w-8 mb-5">+</button>

        <p className="font-semibold text-sm">New Assignment?</p>

        <p className="font-light text-xs mt-1">
          Select from pre-defined questions to have a quick turnaround.
        </p>

        <button className="text-black font-bold bg-white rounded-xl p-2 w-full mt-3 text-xs">
          Create New Assignment
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
