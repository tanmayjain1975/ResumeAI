import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {

  const { user, logout } =
    useContext(AuthContext);

  return (
    <div className="
      bg-white shadow-md px-6 py-4
      flex justify-between items-center
    ">

      <h1 className="text-xl font-semibold">
        Resume Analyzer Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <span className="text-gray-600">
          {user
            ? `Welcome, ${user.name} 👋`
            : "Welcome 👋"}
        </span>

        <img
          src={
            user?.picture ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="profile"
          className="w-10 h-10 rounded-full"
        />

        {user && (
          <button
            onClick={logout}
            className="
              bg-red-500 text-white
              px-3 py-1 rounded-lg text-sm
            "
          >
            Logout
          </button>
        )}

      </div>

    </div>
  );
}

export default Header;
