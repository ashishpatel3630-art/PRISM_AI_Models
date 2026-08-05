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
        <div
          className="
            text-2xl
            font-bold
            tracking-tight
            text-white
            "
        >
          CustomerIQ
          <span className="text-gray-400">AI</span>
        </div>
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
          <a className="hover:text-white">FAQ</a>
        </div>

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
            hover:text-amber-50
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
            hover:scale-95
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
