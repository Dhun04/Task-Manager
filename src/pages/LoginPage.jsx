import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser, loginUser, oauthLogin } from "../api"; // Import API functions

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login & signup
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // For redirecting

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        const response = await signupUser({ username, email, password });
        console.log("Signup successful:", response);
      } else {
        const response = await loginUser({ email, password });
        console.log("Login successful:", response);
        localStorage.setItem("token", response.token); // Store token
      }
      navigate("/dashboard"); // Redirect after login/signup
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  const handleOAuthLogin = async () => {
    try {
      const response = await oauthLogin();
      console.log("OAuth Login successful:", response);
      navigate("/dashboard");
    } catch (error) {
      console.error("OAuth Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">{isSignup ? "Sign Up" : "Login"}</h2>

      <form onSubmit={handleAuth} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80">
        {isSignup && (
          <input
            type="text"
            placeholder="Username"
            className="border rounded p-2 w-full mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="border rounded p-2 w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p className="mb-2">or</p>

      <button
        onClick={handleOAuthLogin}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 w-full"
      >
        Sign in with Google
      </button>

      <p className="mt-4">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-blue-500 underline"
        >
          {isSignup ? "Login here" : "Sign up"}
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
