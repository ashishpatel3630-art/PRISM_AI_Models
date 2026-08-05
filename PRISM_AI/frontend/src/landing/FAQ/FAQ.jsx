import { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const questions = [
    {
      q: "What is CustomerIQ AI?",
      a: "CustomerIQ AI is an AI-powered customer intelligence platform that helps businesses analyze behavior, predict churn, and discover growth opportunities.",
    },

    {
      q: "How does AI predict customer churn?",
      a: "Our machine learning models analyze customer behavior, engagement patterns, and historical data to identify customers who may leave.",
    },

    {
      q: "Can I connect my existing customer data?",
      a: "Yes. CustomerIQ AI is designed to work with existing business data sources and analytics systems.",
    },

    {
      q: "Is my customer data secure?",
      a: "Yes. Security and privacy are core parts of the platform architecture.",
    },

    {
      q: "Do I need technical knowledge?",
      a: "No. The platform converts complex AI analysis into simple business insights.",
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
max-w-5xl
px-6
"
      >
        {/* Heading */}

        <div
          className="
text-center
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
            FAQ
          </p>

          <h2
            className="
mt-6
text-4xl
font-bold
sm:text-6xl
"
          >
            Questions? We have answers.
          </h2>
        </div>

        {/* Accordion */}

        <div
          className="
mt-16
space-y-4
"
        >
          {questions.map((item, index) => (
            <Accordion key={index} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
overflow-hidden
"
    >
      <button
        onClick={() => setOpen(!open)}
        className="
flex
w-full
items-center
justify-between
px-6
py-6
text-left
"
      >
        <span
          className="
font-medium
"
        >
          {question}
        </span>

        <span
          className="
text-gray-400
text-xl
"
        >
          {open ? "-" : "+"}
        </span>
      </button>

      {open && (
        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          className="
border-t
border-white/10
px-6
py-5
text-gray-400
"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export default FAQ;
