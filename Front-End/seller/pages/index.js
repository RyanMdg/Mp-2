import { useState } from "react";
import { useRouter } from "next/router";
import "../src/app/globals.css";
import axios from "axios";

const SignupLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3001/user/signup", {
        username,
        password,
        email,
      });
      console.log(response.data); // Assuming the response returns the user object
      // Handle success or redirect to another page
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
        email,
      });
      router.push("/home");
      console.log(response.data); // Assuming the response returns the token
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Signup/Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded p-2 mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-between">
          <button
            onClick={handleSignup}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Signup
          </button>
          <button
            onClick={handleLogin}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
