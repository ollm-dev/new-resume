
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Works from '@/components/Works';
import Interests from '@/components/Interests';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Works />
        <Interests />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
