import Hero from "../landing/Hero/Hero";
import Navbar from "../landing/Navbar/Navbar";
import Trusted from "../landing/Trusted/Trusted";
import Problem from "../landing/Problem/Problem";
function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted/>
      <Problem/>
    </>
  );
}

export default Landing;
