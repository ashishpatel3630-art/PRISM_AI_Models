import { Search, Sparkles, Bell, ChevronDown, LogOut } from "lucide-react";


const logout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/login";

};


const Navbar = () => {


return (

<header className="flex items-center justify-between px-6 py-4">


{/* Search Input */}

<div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2">

<Search className="h-4 w-4 text-slate-400"/>

<input

placeholder="Search customers, models..."

className="bg-transparent outline-none text-sm text-white placeholder:text-slate-500"

/>

</div>




{/* Right Controls */}

<div className="flex items-center gap-4">


<button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity">

<Sparkles className="h-3.5 w-3.5"/>

AI Assistant

</button>



<button className="relative rounded-xl border border-slate-800 bg-slate-900/60 p-2 text-slate-400 hover:text-slate-200">

<Bell className="h-4 w-4"/>

<span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>

</button>



<div className="h-6 w-px bg-slate-800"></div>





{/* User Profile */}

<div className="flex items-center gap-3 cursor-pointer">


<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-white">

AS

</div>



<div className="hidden text-left md:block">

<p className="text-xs font-medium text-slate-200">

Ashish

</p>


<p className="text-[10px] text-slate-400">

Enterprise Admin

</p>


</div>



<ChevronDown className="h-3.5 w-3.5 text-slate-400"/>



<button

onClick={logout}

className="ml-2 rounded-lg p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800"

>

<LogOut className="h-4 w-4"/>

</button>


</div>


</div>


</header>

);

};


export default Navbar;