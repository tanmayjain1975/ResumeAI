import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">ResumeAI</h1>

        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>

          <Link to="/login" className="hover:text-primary">
            Login
          </Link>

          <Link to="/signup">
            <button
              className="
                bg-gradient-to-r from-blue-600 to-indigo-600
              text-white px-5 py-2 rounded-xl
              shadow-md hover:scale-105 transition"
            >
              Signup
            </button>
          </Link>
        </div>

        <div className="md:hidden text-2xl">☰</div>
      </div>
    </nav>
  );
}

export default Navbar;
