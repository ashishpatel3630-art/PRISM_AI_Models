function Footer() {
  const columns = [
    {
      title: "Product",
      links: [
        "Customer Analytics",
        "Churn Prediction",
        "Segmentation",
        "AI Copilot",
      ],
    },

    {
      title: "Resources",
      links: ["Documentation", "Blog", "Help Center", "Guides"],
    },

    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Security"],
    },
  ];

  return (
    <footer
      className="
border-t
border-white/10
bg-[#050505]
py-20
text-white
"
    >
      <div
        className="
mx-auto
max-w-7xl
px-6
"
      >
        <div
          className="
grid
gap-12
md:grid-cols-4
"
        >
          {/* Brand */}

          <div>
            <h2
              className="
text-2xl
font-bold
"
            >
              CustomerIQ
              <span className="text-gray-500">AI</span>
            </h2>

            <p
              className="
mt-5
max-w-xs
text-gray-400
leading-relaxed
"
            >
              AI-powered customer intelligence platform helping businesses
              predict, understand and grow.
            </p>
          </div>

          {/* Links */}

          {columns.map((column, index) => (
            <div key={index}>
              <h3
                className="
font-semibold
"
              >
                {column.title}
              </h3>

              <ul
                className="
mt-5
space-y-3
text-gray-400
"
              >
                {column.links.map((link, i) => (
                  <li
                    key={i}
                    className="
cursor-pointer
transition
hover:text-white
"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div
          className="
mt-16
flex
flex-col
justify-between
gap-5
border-t
border-white/10
pt-8
text-sm
text-gray-500
md:flex-row
"
        >
          <p>© 2026 CustomerIQ AI. All rights reserved.</p>

          <div
            className="
flex
gap-6
"
          >
            <span className="hover:text-white cursor-pointer">Privacy</span>

            <span className="hover:text-white cursor-pointer">Terms</span>

            <span className="hover:text-white cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
