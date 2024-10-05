/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WorkExperience from './sections/Experience';



const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />

    </main>
  );
}

export default App;
