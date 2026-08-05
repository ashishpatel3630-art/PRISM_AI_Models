

function Navbar() {
  return (
    <nav
      className="
fixed
top-0
left-0
z-50
w-full
border-b
border-white/10
bg-black/60
backdrop-blur-xl
"
    >
      <div
        className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-5
"
      >
        {/* Logo */}

        <div
          className="
text-xl
font-bold
tracking-tight
"
        >
          CustomerIQ
          <span className="text-gray-400">AI</span>
        </div>

        {/* Menu */}

        <div
          className="
hidden
gap-8
text-sm
text-gray-400
md:flex
"
        >
          <a className="hover:text-white">Product</a>

          <a className="hover:text-white">Solutions</a>

          <a className="hover:text-white">Pricing</a>

          <a className="hover:text-white">Resources</a>
        </div>

        {/* Buttons */}

        <div
          className="
flex
items-center
gap-3
"
        >
          <button
            className="
hidden
text-sm
text-gray-300
sm:block
"
          >
            Login
          </button>

          <button
            className="
rounded-xl
bg-white
px-5
py-2.5
text-sm
font-medium
text-black
hover:scale-105
transition
"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
