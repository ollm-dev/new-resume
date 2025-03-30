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
    <div className="rounded-3xl overflow-hidden shadow-blue">
      <AspectRatio ratio={16/5} className="bg-gradient-to-r">
        <div className="absolute inset-0 bg-opacity-70">
          <LazyImage 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="Coding passion" 
            className="w-full h-full object-cover mix-blend-overlay opacity-90"
          />
        </div>
        <div 
          className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 90%)'
          }}
        >
          <div className="flex items-center gap-4 mb-4 animate-fade-in">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-shadow-sm">技术热爱者</h3>
          </div>
          <p className="md:text-lg max-w-3xl animate-slide-up backdrop-blur-xs px-5 py-4 rounded-xl bg-black/10 text-white/95 shadow-sm">
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