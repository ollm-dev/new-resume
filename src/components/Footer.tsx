
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-resume-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">甘智斌</h2>
            <p className="text-white/80">AI全栈开发者 | 前端工程师</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:luli_0819@qq.com" className="hover:text-white/80">luli_0819@qq.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:19079602718" className="hover:text-white/80">19079602718</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} 甘智斌. 保留所有权利.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://resume-mu-self.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4" />
                <span>个人主页</span>
              </span>
            </a>
            <a 
              href="https://juejin.cn/user/3806962499980916/columns" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4" />
                <span>稀土掘金</span>
              </span>
            </a>
            <a 
              href="https://gitee.com/luli1314520" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4" />
                <span>Gitee</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
