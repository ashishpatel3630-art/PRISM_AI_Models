import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      const token = res.data.access_token;

      localStorage.setItem("token", token);
      localStorage.setItem(
"user",
JSON.stringify(res.data.user)
);

      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-96 p-8 rounded-2xl bg-slate-900 border border-slate-800">
        <h1 className="text-2xl text-white font-bold mb-6">PRISM AI Login</h1>

        <form onSubmit={handleLogin}>
          <input
            className="w-full mb-4 p-3 rounded bg-slate-800 text-white"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full mb-4 p-3 rounded bg-slate-800 text-white"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-400 mb-3">{error}</p>}

          <button className="w-full bg-cyan-500 p-3 rounded-lg font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
