import React from 'react';
import PersonalBanner from './about/PersonalBanner';
import LifePhotoCarousel from './about/LifePhotoCarousel';
import PersonalDetails from './about/PersonalDetails';

/**
 * @component About
 * @description 个人信息展示组件，整合了个人横幅、生活照片轮播和个人详细信息
 * @returns {JSX.Element} 渲染的个人信息组件
 */
const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-resume-gray">
      <div className="container mx-auto px-4 md:px-6 space-y-16">
        <h2 className="text-4xl font-bold purple-gradient-text mb-12 text-center">
          个人信息
        </h2>
        
        {/* 技术热爱者横幅 */}
        <div className="transform transition-all hover:translate-y-[-5px] duration-300 hover:shadow-blue rounded-3xl">
          <PersonalBanner />
        </div>
        
        {/* 个人详细信息 */}
        <div className="animate-slide-up">
          <PersonalDetails />
        </div>
        
        {/* 生活掠影轮播图 */}
        <div className="animate-slide-in-right">
          <LifePhotoCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
