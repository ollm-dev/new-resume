import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  Mail, 
  Phone, 
  Github, 
  ExternalLink 
} from 'lucide-react';

/**
 * @component Header
 * @description 简历头部组件，显示个人基本信息、联系方式和下载简历选项
 * @returns {JSX.Element} 渲染的头部组件
 */
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-resume-blue to-resume-lightBlue text-white py-12 md:py-16 px-4 md:px-8 shadow-lg">
      <div className="container mx-auto">
        {/* 主要信息区域 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="animate-fade-in space-y-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">甘智斌</h1>
              <p className="text-xl text-white/90 font-medium">AI全栈开发者 | 前端工程师</p>
            </div>
            
            {/* 联系方式 */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="mailto:luli_0819@qq.com" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full"
              >
                <Mail size={16} />
                <span>luli_0819@qq.com</span>
              </a>
              <a 
                href="tel:19079602718" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full"
              >
                <Phone size={16} />
                <span>19079602718</span>
              </a>
              <a 
                href="https://gitee.com/luli1314520" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                <span>Gitee</span>
              </a>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <a href="/my-resume.pdf" download>
              <Button className="bg-white text-resume-blue hover:bg-orange-100 gap-2 font-medium shadow-sm hover:shadow-md transition-all duration-200 px-5 py-2.5">
                <Download size={18} />
                下载简历PDF
              </Button>
            </a>
          </div>
        </div>
        
        {/* 外部链接区域 */}
        <div className="pt-6 border-t border-white/20">
          <p className="text-white/70 text-sm mb-3">我的作品链接</p>
          <div className="flex flex-wrap gap-3">
            {/* <a 
              href="https://resume-mu-self.vercel.app/" 
              className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>个人主页</span>
            </a> */}
            <a 
              href="https://juejin.cn/user/3806962499980916/columns" 
              className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>稀土掘金</span>
            </a>
            <a 
              href="https://leetcode.cn/u/lang-e-a/" 
              className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>LeetCode</span>
            </a>
            <a 
              href="https://www.lanqiao.cn/users/2601947/" 
              className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>蓝桥杯OJ</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
