import AuthLayout from "../../components/AuthLayout";

function Login() {
  return (
    <AuthLayout>

      <div className="
        bg-white shadow-xl rounded-2xl
        p-8 w-full max-w-md
      ">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="
            w-full border px-4 py-3 rounded-lg
            mb-4 focus:outline-none
            focus:ring-2 focus:ring-blue-500
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full border px-4 py-3 rounded-lg
            mb-6 focus:outline-none
            focus:ring-2 focus:ring-blue-500
          "
        />

        {/* Login Button */}
        <button className="
          w-full bg-gradient-to-r
          from-blue-600 to-indigo-600
          text-white py-3 rounded-lg
          font-semibold shadow-md
          hover:scale-105 transition
        ">
          Login
        </button>

        {/* Extra Links */}
        <div className="flex justify-between mt-4 text-sm">

          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>

          <a href="/signup" className="text-blue-600 hover:underline">
            Create Account
          </a>

        </div>

      </div>

    </AuthLayout>
  );
}

export default Login;
