import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    navigate("/taskform");
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Task Manager Heading */}
      <header className="absolute top-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide animate-fadeIn">
          📝 TASK MANAGER 📝
        </h1>
        <p className="text-lg mt-2 text-gray-300">Organize your tasks effectively😊</p>
      </header>

      {/* Login / Sign-Up Card */}
      <div className="z-10 w-full max-w-md bg-gray-800 bg-opacity-95 rounded-2xl shadow-xl p-8 text-center backdrop-blur-lg">
        <h2 className="text-2xl font-semibold">{isSignUp ? "Sign Up" : "Login as"}</h2>

        {!isSignUp && (
          <div className="flex justify-center gap-6 mt-6">
            <button
              className={`px-5 py-2 rounded-lg transition-all duration-300 text-lg ${
                role === "user"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-700 hover:bg-blue-500"
              }`}
              onClick={() => setRole("user")}
            >
              User
            </button>
            <button
              className={`px-5 py-2 rounded-lg transition-all duration-300 text-lg ${
                role === "admin"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-700 hover:bg-blue-500"
              }`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>
        )}

        {/* Input Fields */}
        {(role || isSignUp) && (
          <div className="mt-6 space-y-5">
            {isSignUp && (
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-lg"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-lg"
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none text-lg"
              />
            )}

            {/* Buttons */}
            <button
              className="w-full mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 text-lg font-semibold"
              onClick={handleLogin}
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>

            {/* Social Media Signup */}
            {isSignUp && (
              <div className="mt-4 space-y-2">
                <button className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                  Sign Up with Google
                </button>
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                  Sign Up with Facebook
                </button>
              </div>
            )}

            {/* Toggle between Login & Sign Up */}
            <p className="text-sm mt-3">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-400 hover:underline"
              >
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
