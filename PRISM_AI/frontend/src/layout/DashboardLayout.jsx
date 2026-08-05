import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div
      className="
flex
min-h-screen
bg-[#050505]
text-white
"
    >

      <div
        className="
fixed
left-0
top-0
h-screen
w-64
z-40
"
      >
        <Sidebar />
      </div>

      {/* Main */}

      <div
        className="
ml-64
flex
min-h-screen
flex-1
flex-col
"
      >
        {/* Navbar */}

        <div
          className="
sticky
top-0
z-30
border-b
border-white/10
bg-[#050505]/80
backdrop-blur-xl
"
        >
          <Navbar />
        </div>

        {/* Content */}

        <main
          className="
flex-1
p-8
"
        >
          <div
            className="
rounded-3xl
border
border-white/10
bg-white/[0.02]
p-8
min-h-full
"
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
