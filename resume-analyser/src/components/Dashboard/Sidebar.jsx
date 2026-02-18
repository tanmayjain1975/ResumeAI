import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="
      bg-secondary text-white
      w-64 min-h-screen
      p-6 hidden md:block
    ">

      <h2 className="text-2xl font-bold mb-10">
        ResumeAI
      </h2>

      <nav className="space-y-4">

        <Link to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/analyzer" className="block hover:text-blue-400">
          Resume Analyzer
        </Link>

        <Link to="/reports" className="block hover:text-blue-400">
          Reports
        </Link>

        <Link to="/profile" className="block hover:text-blue-400">
          Profile
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;
