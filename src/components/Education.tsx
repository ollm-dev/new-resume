
import React from 'react';
import { CalendarDays, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12 bg-resume-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-blue mb-8">教育经历</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div className="mb-3 md:mb-0">
              <h3 className="text-xl font-semibold">东华理工大学</h3>
              <p className="text-gray-600">软件工程 | 本科</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>2023-09 ~ 2027-07</span>
            </div>
          </div>
          
          <div className="timeline-item">
            <h4 className="text-lg font-medium text-resume-blue mb-2">
              <span className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                学习与研究方向
              </span>
            </h4>
            <p className="text-gray-700 mb-4">
              专注于AI全栈开发技术的学习，包括前端框架、后端服务、大模型应用等。积极参与学校项目和竞赛，不断提升技术能力与项目经验。
            </p>
          </div>
          
          <div className="timeline-item">
            <h4 className="text-lg font-medium text-resume-blue mb-2">
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                主要成就
              </span>
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>GPA专业排名前10%，获评优秀学生称号</li>
              <li>获得江西省蓝桥杯二等奖</li>
              <li>荣获信息系统创新大赛三等奖</li>
              <li>获得二等奖学金</li>
              <li>东华理工ECPC编程竞赛银奖</li>
              <li>成为入党积极分子</li>
            </ul>
          </div>
          
          <div className="timeline-item">
            <h4 className="text-lg font-medium text-resume-blue mb-2">
              <span className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                实践经验
              </span>
            </h4>
            <p className="text-gray-700">
              大一期间即参与老师团队项目开发，负责接入讯飞大模型实现智能聊天功能，提前积累了实际项目经验。
              在校期间积极参与各类编程竞赛，在蓝桥杯OJ平台完成250+题目并发布200+题解，不断锻炼算法思维和问题解决能力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
