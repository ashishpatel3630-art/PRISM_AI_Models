import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="
relative
min-h-screen
overflow-hidden
bg-[#050505]
text-white
"
    >
      {/* Background Glow */}

      <div
        className="
absolute
left-1/2
top-20
h-[500px]
w-[500px]
-translate-x-1/2
rounded-full
bg-white/10
blur-[160px]
"
      />

      <div
        className="
relative
z-10
mx-auto
flex
max-w-7xl
flex-col
items-center
px-6
pt-40
text-center
"
      >
        {/* Badge */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
rounded-full
border
border-white/10
bg-white/5
px-5
py-2
text-sm
text-gray-300
backdrop-blur-xl
"
        >
          ✨ AI Powered Customer Intelligence
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
mt-8
max-w-5xl
text-5xl
font-bold
leading-[1.05]
tracking-[-0.05em]
sm:text-7xl
lg:text-8xl
"
        >
          Understand Your Customers.
          <br />
          <span
            className="
bg-gradient-to-b
from-white
to-gray-500
bg-clip-text
text-transparent
"
          >
            Before They Leave.
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
mt-8
max-w-2xl
text-lg
leading-relaxed
text-gray-400
"
        >
          Transform customer data into predictive insights, churn alerts, and
          growth opportunities with AI.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
          className="
mt-10
flex
gap-4
"
        >
          <button
            className="
rounded-xl
bg-white
px-8
py-4
font-medium
text-black
transition
hover:scale-105
"
          >
            Start Building
          </button>

          <button
            className="
rounded-xl
border
border-white/20
bg-white/5
px-8
py-4
text-white
transition
hover:bg-white/10
"
          >
            View Demo
          </button>
        </motion.div>

        {/* Dashboard */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="
relative
mt-28
w-full
max-w-6xl
"
        >
          <div
            className="
rounded-3xl
border
border-white/10
bg-[#0b0b0b]
p-6
shadow-[0_50px_120px_rgba(0,0,0,.8)]
"
          >
            <div
              className="
flex
justify-between
text-left
"
            >
              <h3 className="font-semibold">CustomerIQ AI Dashboard</h3>

              <span className="text-gray-500">Live</span>
            </div>

            <div
              className="
mt-8
grid
gap-5
md:grid-cols-3
"
            >
              <Card title="Customer Health" value="92%" />

              <Card title="Churn Risk" value="8%" />

              <Card title="Revenue Growth" value="+24%" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ title, value }) {
  return (
    <div
      className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-5
text-left
"
    >
      <p
        className="
text-sm
text-gray-500
"
      >
        {title}
      </p>

      <h2
        className="
mt-3
text-4xl
font-bold
"
      >
        {value}
      </h2>
    </div>
  );
}

export default Hero;
