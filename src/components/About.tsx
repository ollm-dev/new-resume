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
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 space-y-14">
        <h2 className="text-3xl font-bold text-resume-blue mb-10 text-center">个人信息</h2>
         
        {/* 个人详细信息 */}
        <PersonalDetails />
        {/* 技术热爱者横幅 */}
        <PersonalBanner />
        
        {/* 生活掠影轮播图 */}
        <LifePhotoCarousel />
       
      </div>
    </section>
  );
};

export default About;
