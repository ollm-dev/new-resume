
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Mail, 
  Phone, 
  Github, 
  ExternalLink 
} from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-resume-blue text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">甘智斌</h1>
            <p className="text-xl text-white/90 mb-4">AI全栈开发者 | 前端工程师</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a 
                href="mailto:luli_0819@qq.com" 
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Mail size={16} />
                <span>luli_0819@qq.com</span>
              </a>
              <a 
                href="tel:19079602718" 
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Phone size={16} />
                <span>19079602718</span>
              </a>
              <a 
                href="https://gitee.com/luli1314520" 
                className="flex items-center gap-2 text-white/80 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                <span>Gitee</span>
              </a>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <a href="/甘智斌-前端_AI全栈开发-19079602718.pdf" download>
              <Button className="bg-white text-resume-blue hover:bg-gray-100 gap-2">
                <Download size={16} />
                下载简历PDF
              </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap gap-4">
          <a 
            href="https://resume-mu-self.vercel.app/" 
            className="flex items-center gap-2 text-white/80 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span>个人主页</span>
          </a>
          <a 
            href="https://juejin.cn/user/3806962499980916/columns" 
            className="flex items-center gap-2 text-white/80 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span>稀土掘金</span>
          </a>
          <a 
            href="https://leetcode.cn/u/lang-e-a/" 
            className="flex items-center gap-2 text-white/80 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span>LeetCode</span>
          </a>
          <a 
            href="https://www.lanqiao.cn/users/2601947/" 
            className="flex items-center gap-2 text-white/80 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span>蓝桥杯OJ</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
