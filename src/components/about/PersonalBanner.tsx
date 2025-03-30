import React from 'react';
import { Code } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { LazyImage } from '@/components/ui/lazy-image';

/**
 * @component PersonalBanner
 * @description 技术热爱者横幅组件，展示个人技术理念
 * @returns {JSX.Element} 渲染的横幅组件
 */
const PersonalBanner = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <AspectRatio ratio={16/5} className="bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-resume-blue/80 to-resume-blue/60">
          <LazyImage 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="Coding passion" 
            className="w-full h-full object-cover mix-blend-overlay opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white">
          <div className="flex items-center gap-4 mb-3">
            <Code className="h-8 w-8" />
            <h3 className="text-2xl md:text-3xl font-bold">技术热爱者</h3>
          </div>
          <p className="md:text-lg max-w-3xl">
            从接触第一行代码的那一刻起，编程便成为了我生命中不可或缺的一部分。
            每天探索新技术、解决复杂问题的过程，让我感受到无与伦比的成就感和满足感。
            我相信技术的力量，它可以改变世界，而我希望成为这个变革的一部分。
          </p>
        </div>
      </AspectRatio>
    </div>
  );
};

export default PersonalBanner; 