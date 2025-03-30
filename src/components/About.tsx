import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, MapPin, Mail, Phone, Quote, BookOpen, Target, Code, Lightbulb, HeartHandshake, Camera } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LazyImage } from '@/components/ui/lazy-image';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-blue mb-8">个人信息</h2>
        
        {/* Tech Passion Banner */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <AspectRatio ratio={16/5} className="bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-resume-blue/80 to-resume-blue/60">
              <LazyImage 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Coding passion" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Code className="h-7 w-7" />
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
        
        {/* Life Photos Carousel */}
        <div className="mb-8 bg-white rounded-lg p-6 shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Camera className="text-resume-blue h-6 w-6" />
            <h3 className="text-xl font-semibold text-resume-blue">生活掠影</h3>
          </div>
          
          <div className="relative px-10">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <AspectRatio ratio={4/3}>
                        <LazyImage 
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                          alt="学习日常" 
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </AspectRatio>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-gray-900 mb-1">专注学习</h4>
                        <p className="text-sm text-gray-600">钻研技术，持续学习是我的日常</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <AspectRatio ratio={4/3}>
                        <LazyImage 
                          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                          alt="户外休闲" 
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </AspectRatio>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-gray-900 mb-1">亲近自然</h4>
                        <p className="text-sm text-gray-600">户外活动让我保持身心平衡</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <AspectRatio ratio={4/3}>
                        <LazyImage 
                          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                          alt="团队协作" 
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </AspectRatio>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-gray-900 mb-1">团队协作</h4>
                        <p className="text-sm text-gray-600">与伙伴们一起解决问题的瞬间</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-700 italic">
              "生活不只有代码，保持平衡才能走得更远"
            </p>
          </div>
        </div>
        
        {/* Motto */}
        <div className="mb-8 bg-gradient-to-r from-resume-blue/10 to-resume-blue/5 rounded-lg p-6 shadow-sm border border-resume-blue/20 transform hover:scale-[1.01] transition-transform">
          <div className="flex items-center gap-3 mb-4">
            <Quote className="text-resume-blue h-6 w-6" />
            <h3 className="text-xl font-semibold text-resume-blue">座右铭</h3>
          </div>
          <blockquote className="italic text-lg text-gray-700 border-l-4 border-resume-blue pl-4">
            "技术改变世界，创新定义未来。每一行代码都是连接可能性的桥梁，每一次学习都是向未知探索的旅程。"
          </blockquote>
        </div>
        
        {/* Personal Values Visual Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-md hover:shadow-lg transition-all overflow-hidden group">
            <div className="h-2 bg-resume-blue"></div>
            <div className="h-40 overflow-hidden">
              <LazyImage 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Persistence" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-full bg-resume-blue/10">
                  <Target className="h-5 w-5 text-resume-blue" />
                </div>
                <h3 className="font-semibold text-resume-blue">坚持不懈</h3>
              </div>
              <p className="text-gray-700 text-sm">
                面对挑战从不退缩，保持积极的心态和持续的努力，将每一次失败视为宝贵的学习机会。
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-all overflow-hidden group">
            <div className="h-2 bg-resume-accent"></div>
            <div className="h-40 overflow-hidden">
              <LazyImage 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Innovation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-full bg-resume-accent/10">
                  <Lightbulb className="h-5 w-5 text-resume-accent" />
                </div>
                <h3 className="font-semibold text-resume-accent">创新思维</h3>
              </div>
              <p className="text-gray-700 text-sm">
                不满足于现状，始终保持对新技术的好奇心，勇于尝试不同的解决方案，追求更优雅高效的代码实现。
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-all overflow-hidden group">
            <div className="h-2 bg-resume-blue"></div>
            <div className="h-40 overflow-hidden">
              <LazyImage 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Collaboration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-full bg-resume-blue/10">
                  <HeartHandshake className="h-5 w-5 text-resume-blue" />
                </div>
                <h3 className="font-semibold text-resume-blue">团队协作</h3>
              </div>
              <p className="text-gray-700 text-sm">
                相信优秀的产品来自于团队的共同努力，乐于分享知识，善于沟通，与团队成员共同成长。
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-resume-blue to-resume-accent"></div>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-resume-blue/10 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5 text-resume-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">教育背景</h3>
                    <p className="text-gray-600">东华理工大学 | 软件工程</p>
                    <p className="text-sm text-gray-500">本科 | 2023-09 ~ 2027-07</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-resume-blue/10 p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-resume-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">求职意向</h3>
                    <p className="text-gray-600">AI全栈开发 | 前端工程师</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-resume-blue/10 p-2 rounded-full">
                    <Target className="h-5 w-5 text-resume-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">个人理念</h3>
                    <p className="text-gray-600">持续学习 | 工程思维 | 开源共享</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-resume-accent to-resume-blue"></div>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-resume-blue/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-resume-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">所在地区</h3>
                    <p className="text-gray-600">江西省</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-resume-blue/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-resume-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">电子邮箱</h3>
                    <p className="text-gray-600">luli_0819@qq.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-resume-blue/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-resume-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">联系电话</h3>
                    <p className="text-gray-600">19079602718</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-resume-blue/10 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-resume-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">格言</h3>
                    <p className="text-gray-600">好奇心是最好的老师</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200 transform hover:translate-y-[-5px] transition-transform">
          <h3 className="text-xl font-semibold text-resume-blue mb-3 flex items-center gap-2">
            <div className="h-6 w-1 bg-resume-blue rounded-full"></div>
            学业成绩与荣誉
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-resume-blue mt-2"></span>
              <span>GPA专业前10%，优秀学生</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-resume-blue mt-2"></span>
              <span>入党积极分子</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-resume-blue mt-2"></span>
              <span>大一参与老师团队项目开发，负责接入讯飞大模型实现智能聊天</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-resume-blue mt-2"></span>
              <span>获江西省蓝桥杯二等奖、信息系统创新大赛三等奖、二等奖学金、东华理工ECPC银奖</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
