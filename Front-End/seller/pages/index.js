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
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

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
      setShowModal(true);
    }
  };

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

      {/* MODAL SHOWING WHEN LOGIN NOT EXIST  */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-500 bg-opacity-60 ease-in flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-md p-8 transition-opacity duration-300">
            <h2 className="text-lg font-bold mb-4 ">
              <span className=" text-red-500">Wrong!</span> username or password{" "}
            </h2>
            <button
              className="text-white  bg-slate-600 hover:bg-slate-700 transition p-3 rounded-md mt-4"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupLogin;
