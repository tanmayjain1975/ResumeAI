import AuthLayout from "../../components/AuthLayout";

function Signup() {
  return (
    <AuthLayout>

      <div className="
        bg-white shadow-xl rounded-2xl
        p-8 w-full max-w-md
      ">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="
            w-full border px-4 py-3 rounded-lg
            mb-4 focus:outline-none
            focus:ring-2 focus:ring-blue-500
          "
        />

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
            mb-4 focus:outline-none
            focus:ring-2 focus:ring-blue-500
          "
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="
            w-full border px-4 py-3 rounded-lg
            mb-6 focus:outline-none
            focus:ring-2 focus:ring-blue-500
          "
        />

        {/* Signup Button */}
        <button className="
          w-full bg-gradient-to-r
          from-blue-600 to-indigo-600
          text-white py-3 rounded-lg
          font-semibold shadow-md
          hover:scale-105 transition
        ">
          Signup
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>

      </div>

    </AuthLayout>
  );
}

export default Signup;
