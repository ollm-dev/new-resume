
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'about', label: '个人信息' },
  { id: 'education', label: '教育经历' },
  { id: 'experience', label: '实习经历' },
  { id: 'skills', label: '专业技能' },
  { id: 'projects', label: '项目经历' },
  { id: 'works', label: '个人作品' },
  { id: 'interests', label: '兴趣爱好' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // 考虑导航栏高度
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // 确定当前可见的部分
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.reduce((nearest, section) => {
        if (!section) return nearest;
        const sectionTop = section.getBoundingClientRect().top;
        // 选择最接近顶部但还在视窗上方的部分
        if (sectionTop <= 100 && (!nearest || sectionTop > nearest.getBoundingClientRect().top)) {
          return section;
        }
        return nearest;
      }, null as HTMLElement | null);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-resume-blue">甘智斌 | 个人简历</span>
          
          {/* 桌面导航 */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "transition-colors py-1 px-2 rounded",
                  activeSection === item.id
                    ? "text-resume-blue font-medium border-b-2 border-resume-blue"
                    : "text-gray-600 hover:text-resume-blue"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* 移动端导航按钮 */}
          <button
            className="md:hidden text-resume-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "transition-colors py-2 px-4 rounded text-left",
                    activeSection === item.id
                      ? "bg-resume-blue/10 text-resume-blue font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
