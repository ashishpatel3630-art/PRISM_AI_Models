import Hero from "../landing/Hero/Hero";
import Navbar from "../landing/Navbar/Navbar";
import Trusted from "../landing/Trusted/Trusted";
import Problem from "../landing/Problem/Problem";
import Features from "../landing/Features/Features";
import ProductShowcase from "../landing/ProductShowcase/ProductShowcase";
import Testimonials from "../landing/Testimonials/Testimonials";
import FAQ from "../landing/FAQ/FAQ";
import Footer from "../landing/Footer/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted/>
      <Problem/>
      <Features/>
      <ProductShowcase/>
      <Testimonials />
      <FAQ/>
      <Footer/>

    </>
  );
}

export default Landing;
