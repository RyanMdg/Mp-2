import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import "../src/app/globals.css";
import Link from "next/link";

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
      const token = response.data.token; // Assuming the response returns the token
      localStorage.setItem("token", token); // Store the token in local storage
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex bg-zinc-500 flex-col justify-center items-center h-screen">
      <title>TGH ADMIN | Login</title>
      <div>
        <h1 className=" bg-black p-3 text-white m-5">The Grocery Hub Admin</h1>
      </div>
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

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
        <div className="flex items-center gap-4 flex-col">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className=" underline">
              Signup here.
            </a>
          </p>

          <button
            onClick={handleLogin}
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-7 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
