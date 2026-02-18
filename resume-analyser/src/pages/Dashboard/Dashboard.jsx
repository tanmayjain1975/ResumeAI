import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";
import StatCard from "../../components/Dashboard/StatCard";
import RecentReports from "../../components/Dashboard/RecentReports";

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Header />

        <div className="p-6">

          {/* Stats */}
          <div className="
            grid grid-cols-1
            md:grid-cols-3
            gap-6
          ">

            <StatCard
              title="Resumes Analyzed"
              value="24"
            />

            <StatCard
              title="Average Score"
              value="81%"
            />

            <StatCard
              title="Skill Gaps Found"
              value="12"
            />

          </div>

          {/* Reports */}
          <RecentReports />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
