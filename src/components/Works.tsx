import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { LazyImage } from '@/components/ui/lazy-image';

const works = [
  {
    title: '掘金技术博客',
    description: '四级作者，2024年度人气作者排名52，发布技术文90+篇',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80',
    link: 'https://juejin.cn/user/3806962499980916/columns'
  },
  {
    title: 'Gitee开源代码库',
    description: '记录自学过程，分享项目源码与学习成果',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80',
    link: 'https://gitee.com/luli1314520'
  },
  {
    title: 'LeetCode算法题解',
    description: '完成算法题100+，持续发布题解与学习笔记',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    link: 'https://leetcode.cn/u/lang-e-a/'
  },
  {
    title: '蓝桥杯OJ',
    description: '完成题目250+，发布200+题解，积累算法与问题解决能力',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80',
    link: 'https://www.lanqiao.cn/users/2601947/'
  }
];

const Works = () => {
  return (
    <section id="works" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-blue mb-8">个人作品展示</h2>
        
        {/* 大屏幕展示 */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {works.map((work, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <LazyImage 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold text-resume-blue mb-3">{work.title}</h3>
                  <p className="text-gray-600 mb-4 h-20">{work.description}</p>
                  <a 
                    href={work.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-resume-blue hover:text-resume-accent transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>查看详情</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* 移动端轮播展示 */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {works.map((work, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden shadow-md h-full">
                    <div className="h-48 overflow-hidden">
                      <LazyImage 
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold text-resume-blue mb-3">{work.title}</h3>
                      <p className="text-gray-600 mb-4">{work.description}</p>
                      <a 
                        href={work.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-resume-blue hover:text-resume-accent transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        <span>查看详情</span>
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Works;
