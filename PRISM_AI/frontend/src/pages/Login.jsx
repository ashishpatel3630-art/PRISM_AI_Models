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

      localStorage.setItem("token", res.data.access_token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      console.log(err);

      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="
min-h-screen
flex
items-center
justify-center
bg-[#050505]
text-white
px-6
"
    >
      <div
        className="
w-full
max-w-md
rounded-3xl
border
border-white/10
bg-white/[0.03]
p-8
backdrop-blur-xl
"
      >
        <h1
          className="
text-3xl
font-bold
text-center
"
        >
          CustomerIQ
          <span className="text-gray-500">AI</span>
        </h1>

        <p
          className="
mt-3
text-center
text-gray-400
"
        >
          Welcome back
        </p>

        <form onSubmit={handleLogin} className="mt-8">
          <input
            className="
w-full
rounded-xl
border
border-white/10
bg-black
p-4
text-white
outline-none
"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="
mt-4
w-full
rounded-xl
border
border-white/10
bg-black
p-4
text-white
outline-none
"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p
              className="
mt-4
text-sm
text-red-400
"
            >
              {error}
            </p>
          )}

          <button
            className="
mt-6
w-full
rounded-xl
bg-white
p-4
font-semibold
text-black
transition
hover:scale-[1.02]
"
          >
            Login
          </button>
        </form>

        <div
          className="
my-6
flex
items-center
gap-4
"
        >
          <div
            className="
h-px
flex-1
bg-white/10
"
          />

          <span
            className="
text-sm
text-gray-500
"
          >
            OR
          </span>

          <div
            className="
h-px
flex-1
bg-white/10
"
          />
        </div>

        <button
          className="
w-full
rounded-xl
border
border-white/10
bg-white/5
p-4
hover:bg-white/10
"
        >
          Continue with Google
        </button>

        <button
          className="
mt-3
w-full
rounded-xl
border
border-white/10
bg-white/5
p-4
hover:bg-white/10
"
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
