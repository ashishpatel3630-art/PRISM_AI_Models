import { motion } from "framer-motion";

function Problem() {
  const problems = [
    {
      title: "Customer Data is Scattered",
      desc: "Important customer signals are hidden across multiple platforms and systems.",
    },

    {
      title: "Churn Comes Unexpectedly",
      desc: "Businesses discover customer problems only after they leave.",
    },

    {
      title: "Decisions Without Intelligence",
      desc: "Teams spend hours analyzing data manually instead of taking action.",
    },
  ];

  return (
    <section
      className="
bg-[#050505]
py-32
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
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
max-w-3xl
"
        >
          <p
            className="
text-sm
uppercase
tracking-[0.3em]
text-gray-500
"
          >
            The Problem
          </p>

          <h2
            className="
mt-6
text-4xl
font-bold
tracking-tight
sm:text-6xl
"
          >
            Businesses lose customers because they lack
            <span
              className="
text-gray-500
"
            >
              intelligent insights.
            </span>
          </h2>

          <p
            className="
mt-6
text-lg
text-gray-400
"
          >
            Traditional analytics tell you what happened. CustomerIQ AI tells
            you what will happen next.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
mt-20
grid
gap-6
md:grid-cols-3
"
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="
group
rounded-3xl
border
border-white/10
bg-white/[0.03]
p-8
transition
hover:-translate-y-2
hover:bg-white/[0.06]
"
            >
              <div
                className="
mb-8
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-white/10
text-xl
"
              >
                0{index + 1}
              </div>

              <h3
                className="
text-xl
font-semibold
"
              >
                {item.title}
              </h3>

              <p
                className="
mt-4
leading-relaxed
text-gray-400
"
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution */}

        <div
          className="
mt-24
rounded-3xl
border
border-white/10
bg-gradient-to-b
from-white/[0.08]
to-transparent
p-10
text-center
"
        >
          <h3
            className="
text-3xl
font-bold
"
          >
            CustomerIQ AI turns data into decisions.
          </h3>

          <p
            className="
mx-auto
mt-4
max-w-2xl
text-gray-400
"
          >
            Predict churn, understand customers, and discover growth
            opportunities before they happen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Problem;
