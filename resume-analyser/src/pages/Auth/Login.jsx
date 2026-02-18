import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { AuthContext } from "../../context/AuthContext";

function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNormalLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    const userData = {
      name: email.split("@")[0],
      email: email
    };

    login(userData);
    navigate("/dashboard");
  };


  const handleGoogleSuccess = (credentialResponse) => {

    const decoded = jwtDecode(
      credentialResponse.credential
    );

    const userData = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture
    };

    login(userData);
    navigate("/dashboard");
  };

  return (
    <div className="
      min-h-screen flex items-center
      justify-center bg-gray-100
    ">

      <div className="
        bg-white p-8 rounded-2xl
        shadow-xl w-full max-w-md
      ">

        <h2 className="
          text-2xl font-bold text-center
          mb-6
        ">
          Login
        </h2>

        {/* Normal Login */}
        <form onSubmit={handleNormalLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full border px-4 py-3
              rounded-lg mb-4
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full border px-4 py-3
              rounded-lg mb-6
            "
          />

          <button
            type="submit"
            className="
              w-full bg-blue-600
              text-white py-3
              rounded-lg font-semibold
              mb-4
            "
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="text-center mb-4">
          OR
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() =>
              alert("Google Login Failed")
            }
          />
        </div>

      </div>
    </div>
  );
}

export default Login;
