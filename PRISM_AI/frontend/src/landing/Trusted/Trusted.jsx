import { motion } from "framer-motion";

function Trusted() {
  return (
    <section
      className="
border-y
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
text-center
"
      >
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
text-sm
uppercase
tracking-[0.3em]
text-gray-500
"
        >
          Trusted by modern businesses
        </motion.p>

        <div
          className="
mt-12
grid
grid-cols-2
gap-8
opacity-50
md:grid-cols-5
"
        >
          {["Nova", "Vertex", "Pulse", "Orbit", "Quantum"].map(
            (company, index) => (
              <div
                key={index}
                className="
text-xl
font-semibold
text-gray-400
"
              >
                {company}
              </div>
            ),
          )}
        </div>

        {/* Stats */}

        <div
          className="
mt-20
grid
gap-8
md:grid-cols-3
"
        >
          <Stat number="10K+" text="Active Customers" />

          <Stat number="99.9%" text="Prediction Accuracy" />

          <Stat number="24/7" text="AI Monitoring" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, text }) {
  return (
    <div
      className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-8
"
    >
      <h3
        className="
text-4xl
font-bold
"
      >
        {number}
      </h3>

      <p
        className="
mt-3
text-gray-500
"
      >
        {text}
      </p>
    </div>
  );
}

export default Trusted;
