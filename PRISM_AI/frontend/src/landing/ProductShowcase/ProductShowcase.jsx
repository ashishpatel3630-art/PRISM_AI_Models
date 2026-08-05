import { motion } from "framer-motion";

function ProductShowcase() {
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
text-center
max-w-3xl
mx-auto
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
            Product Experience
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
            One platform. Complete customer intelligence.
          </h2>

          <p
            className="
mt-6
text-lg
text-gray-400
"
          >
            Monitor customer behavior, predict future actions, and make smarter
            decisions with AI.
          </p>
        </div>

        {/* Product Preview */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
mt-20
overflow-hidden
rounded-3xl
border
border-white/10
bg-[#0b0b0b]
shadow-[0_40px_100px_rgba(0,0,0,.7)]
"
        >
          {/* Header */}

          <div
            className="
flex
items-center
justify-between
border-b
border-white/10
px-6
py-5
"
          >
            <div
              className="
flex
gap-2
"
            >
              <span
                className="
h-3
w-3
rounded-full
bg-white/70
"
              />

              <span
                className="
h-3
w-3
rounded-full
bg-white/30
"
              />

              <span
                className="
h-3
w-3
rounded-full
bg-white/20
"
              />
            </div>

            <p
              className="
text-sm
text-gray-400
"
            >
              CustomerIQ AI
            </p>
          </div>

          <div
            className="
grid
gap-8
p-8
lg:grid-cols-4
"
          >
            {/* Sidebar */}

            <div
              className="
hidden
space-y-4
border-r
border-white/10
pr-6
lg:block
"
            >
              {[
                "Overview",
                "Analytics",
                "Predictions",
                "Customers",
                "Reports",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`
rounded-lg
px-4
py-3
text-sm
${index === 0 ? "bg-white/10 text-white" : "text-gray-500"}
`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main Dashboard */}

            <div
              className="
lg:col-span-3
"
            >
              <div
                className="
grid
gap-5
md:grid-cols-3
"
              >
                <Card title="Customer Health" value="92%" />

                <Card title="Churn Prediction" value="8%" />

                <Card title="Revenue Forecast" value="+24%" />
              </div>

              {/* Analytics Area */}

              <div
                className="
mt-6
grid
gap-6
md:grid-cols-2
"
              >
                <div
                  className="
h-56
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-6
"
                >
                  <p
                    className="
text-sm
text-gray-500
"
                  >
                    Customer Growth
                  </p>

                  <div
                    className="
mt-8
flex
h-32
items-end
gap-3
"
                  >
                    {[30, 55, 40, 80, 60, 95].map((value, index) => (
                      <div
                        key={index}
                        style={{
                          height: `${value}%`,
                        }}
                        className="
flex-1
rounded-t-lg
bg-white/20
"
                      />
                    ))}
                  </div>
                </div>

                <div
                  className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-6
"
                >
                  <p
                    className="
text-sm
text-gray-500
"
                  >
                    AI Recommendation
                  </p>

                  <h3
                    className="
mt-5
text-xl
font-semibold
"
                  >
                    Increase engagement with high-value customers.
                  </h3>

                  <p
                    className="
mt-4
text-sm
text-gray-400
"
                  >
                    AI detected a growth opportunity from customer behavior
                    patterns.
                  </p>
                </div>
              </div>
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

      <h3
        className="
mt-3
text-3xl
font-bold
"
      >
        {value}
      </h3>
    </div>
  );
}

export default ProductShowcase;
