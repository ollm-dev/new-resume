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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navigation />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-8">
        <div className="space-y-24">
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Works />
          <Interests />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
