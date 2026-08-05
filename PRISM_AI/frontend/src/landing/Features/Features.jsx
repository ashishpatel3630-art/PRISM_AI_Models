import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      title: "Customer Analytics",
      desc: "Understand customer behavior with real-time analytics and intelligent insights.",
      icon: "01",
    },

    {
      title: "Churn Prediction",
      desc: "Identify customers at risk before they leave using predictive AI models.",
      icon: "02",
    },

    {
      title: "Customer Segmentation",
      desc: "Automatically group customers based on behavior, value, and engagement.",
      icon: "03",
    },

    {
      title: "Lifetime Value Prediction",
      desc: "Predict future customer value and optimize business decisions.",
      icon: "04",
    },

    {
      title: "Recommendation Engine",
      desc: "Deliver personalized recommendations that increase retention and revenue.",
      icon: "05",
    },

    {
      title: "AI Copilot",
      desc: "Ask questions, analyze data, and get instant business insights with AI.",
      icon: "06",
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

        <div
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
            Powerful AI Features
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
            Everything you need to understand your customers.
          </h2>

          <p
            className="
mt-6
text-lg
text-gray-400
"
          >
            From prediction to automation, CustomerIQ AI gives businesses the
            intelligence they need to grow.
          </p>
        </div>

        {/* Feature Grid */}

        <div
          className="
mt-20
grid
gap-6
md:grid-cols-2
lg:grid-cols-3
"
        >
          {features.map((feature, index) => (
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
                delay: index * 0.1,
              }}
              className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.03]
p-8
transition
duration-500
hover:-translate-y-2
hover:bg-white/[0.06]
"
            >
              {/* Number */}

              <div
                className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-white/10
text-sm
text-gray-300
"
              >
                {feature.icon}
              </div>

              <h3
                className="
mt-8
text-xl
font-semibold
"
              >
                {feature.title}
              </h3>

              <p
                className="
mt-4
leading-relaxed
text-gray-400
"
              >
                {feature.desc}
              </p>

              {/* Hover Glow */}

              <div
                className="
absolute
bottom-0
left-0
h-32
w-full
bg-gradient-to-t
from-white/10
to-transparent
opacity-0
transition
group-hover:opacity-100
"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
