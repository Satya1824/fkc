import AdminDashboard from "@/components/AdminDashboard";
import StudentsInfo from "@/components/StudentsInfo";

export default function Home() {
  return (
    <div className="flex px-10 pt-10">
      <div className="">
        <AdminDashboard />
      </div>

      <div className="flex-1">
        <StudentsInfo />
      </div>
    </div>
  );
}
