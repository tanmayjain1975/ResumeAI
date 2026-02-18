import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault(); // VERY IMPORTANT

    try {

      const res = await axios.post(
        "http://127.0.0.1:5000/signup",
        {
          name,
          email,
          password
        }
      );

      alert(res.data.message);

      navigate("/login");

    } catch (err) {

      alert(
        err.response?.data?.error ||
        "Signup failed"
      );
    }
  };

  return (
    <form onSubmit={handleSignup}>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button type="submit">
        Signup
      </button>

    </form>
  );
}

export default Signup;
