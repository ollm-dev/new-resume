import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, MapPin, Mail, Phone, Quote, BookOpen, Target, Lightbulb, HeartHandshake } from 'lucide-react';
import { LazyImage } from '@/components/ui/lazy-image';

/**
 * @component PersonalDetails
 * @description 个人详细信息组件，包含个人价值观、基本信息和荣誉成就
 * @returns {JSX.Element} 渲染的个人详细信息组件
 */
const PersonalDetails = () => {
  return (
    <>
      {/* Motto */}
      <div className="bg-gradient-to-br from-resume-purple/5 to-resume-purple/10 rounded-3xl p-8 shadow-soft border border-white/60 transform hover:scale-[1.01] transition-transform backdrop-blur-xs">
        <div className="flex items-center gap-4 mb-5">
          <div className="p-3 bg-resume-lightBlue/10 rounded-xl">
            <Quote className="text-resume-lightBlue h-7 w-7" />
          </div>
          <h3 className="text-2xl font-semibold purple-gradient-text">座右铭</h3>
        </div>
        <blockquote className="italic text-lg text-gray-700 border-l-4 border-resume-purple pl-6 py-3 bg-white/60 rounded-r-xl shadow-sm">
          "技术改变世界，创新定义未来。每一行代码都是连接可能性的桥梁，每一次学习都是向未知探索的旅程。"
        </blockquote>
      </div>
      
      {/* Personal Values Visual Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="shadow-soft hover:shadow-blue transition-all duration-300 overflow-hidden group rounded-2xl border-0">
          <div className="h-2 bg-resume-blue"></div>
          <div className="h-44 overflow-hidden">
            <LazyImage 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
              alt="Persistence" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-7 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-resume-blue/10">
                <Target className="h-6 w-6 text-resume-blue" />
              </div>
              <h3 className="font-semibold text-lg text-resume-blue">坚持不懈</h3>
            </div>
            <p className="text-gray-700">
              面对挑战从不退缩，保持积极的心态和持续的努力，将每一次失败视为宝贵的学习机会。
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-purple transition-all duration-300 overflow-hidden group rounded-2xl border-0">
          <div className="h-2 bg-gradient-to-r from-resume-lightBlue to-resume-purple"></div>
          <div className="h-44 overflow-hidden">
            <LazyImage 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
              alt="Innovation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-7 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-resume-purple/10">
                <Lightbulb className="h-6 w-6 text-resume-purple" />
              </div>
              <h3 className="font-semibold text-lg text-resume-purple">创新思维</h3>
            </div>
            <p className="text-gray-700">
              不满足于现状，始终保持对新技术的好奇心，勇于尝试不同的解决方案，追求更优雅高效的代码实现。
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-accent transition-all duration-300 overflow-hidden group rounded-2xl border-0">
          <div className="h-2 bg-resume-accent"></div>
          <div className="h-44 overflow-hidden">
            <LazyImage 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Collaboration" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-7 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-resume-accent/10">
                <HeartHandshake className="h-6 w-6 text-resume-accent" />
              </div>
              <h3 className="font-semibold text-lg text-resume-accent">团队协作</h3>
            </div>
            <p className="text-gray-700">
              相信优秀的产品来自于团队的共同努力，乐于分享知识，善于沟通，与团队成员共同成长。
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Personal Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-soft hover:shadow-blue transition-all duration-300 overflow-hidden rounded-2xl border-0 bg-white">
          <div className="h-2 bg-gradient-to-r from-resume-blue to-resume-lightBlue"></div>
          <CardContent className="pt-8 px-8 pb-6">
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-resume-blue/10 p-3 rounded-xl flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-resume-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-resume-darkGray mb-2">教育背景</h3>
                  <p className="text-gray-600">东华理工大学 | 软件工程</p>
                  <p className="text-sm text-gray-500 mt-1">本科 | 2023-09 ~ 2027-07</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-resume-blue/10 p-3 rounded-xl flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-resume-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-resume-darkGray mb-2">求职意向</h3>
                  <p className="text-gray-600">AI全栈开发 | 前端工程师</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-resume-blue/10 p-3 rounded-xl flex-shrink-0">
                  <Target className="h-6 w-6 text-resume-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-resume-darkGray mb-2">个人理念</h3>
                  <p className="text-gray-600">持续学习 | 工程思维 | 开源共享</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft hover:shadow-purple transition-all duration-300 overflow-hidden rounded-2xl border-0 bg-white">
          <div className="h-2 bg-gradient-to-r from-resume-purple to-resume-accent"></div>
          <CardContent className="pt-8 px-8 pb-6">
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-resume-purple/10 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="h-6 w-6 text-resume-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-resume-darkGray mb-2">所在地区</h3>
                  <p className="text-gray-600">江西省</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-resume-purple/10 p-3 rounded-xl flex-shrink-0">
                  <Mail className="h-6 w-6 text-resume-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-resume-darkGray mb-2">电子邮箱</h3>
                  <p className="text-gray-600">luli_0819@qq.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-resume-accent/10 p-3 rounded-xl flex-shrink-0">
                  <Phone className="h-6 w-6 text-resume-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-resume-darkGray mb-2">联系电话</h3>
                  <p className="text-gray-600">19079602718</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-resume-accent2/10 p-3 rounded-xl flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-resume-accent2" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-resume-darkGray mb-2">格言</h3>
                  <p className="text-gray-600">好奇心是最好的老师</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Honors and Awards */}
      <div className="bg-white p-8 rounded-3xl shadow-soft border border-white/20 transform hover:translate-y-[-5px] transition-all duration-300 glassmorphism hover:shadow-purple">
        <h3 className="text-2xl font-semibold purple-gradient-text mb-6 flex items-center gap-3">
          <div className="h-7 w-1.5 bg-resume-purple rounded-full"></div>
          学业成绩与荣誉
        </h3>
        <ul className="space-y-4 text-gray-700 pl-2">
          <li className="flex items-start gap-3 p-3 hover:bg-resume-gray/30 rounded-xl transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-resume-blue mt-2 flex-shrink-0"></span>
            <span>GPA专业前10%，优秀学生</span>
          </li>
          <li className="flex items-start gap-3 p-3 hover:bg-resume-gray/30 rounded-xl transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-resume-purple mt-2 flex-shrink-0"></span>
            <span>入党积极分子</span>
          </li>
          <li className="flex items-start gap-3 p-3 hover:bg-resume-gray/30 rounded-xl transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-resume-accent2 mt-2 flex-shrink-0"></span>
            <span>大一参与老师团队项目开发，负责接入讯飞大模型实现智能聊天</span>
          </li>
          <li className="flex items-start gap-3 p-3 hover:bg-resume-gray/30 rounded-xl transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-resume-accent mt-2 flex-shrink-0"></span>
            <span>获江西省蓝桥杯二等奖、信息系统创新大赛三等奖、二等奖学金、东华理工ECPC银奖</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PersonalDetails; 