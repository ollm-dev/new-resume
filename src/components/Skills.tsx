
import React from 'react';
import { Code, Server, Database, Brain, TerminalSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: '前端开发',
    icon: <Code className="h-6 w-6" />,
    skills: [
      'HTML、CSS、JavaScript、ES6、TypeScript等前端开发基础技术',
      'React、Vue3，以及VantUI、Element plus、Antd等前端组件库',
      'Nextjs、shadcn、tailwindcss进行AI出海应用开发',
      '熟练使用git指令进行版本控制'
    ]
  },
  {
    title: '后端技术',
    icon: <Server className="h-6 w-6" />,
    skills: [
      '具备全流思维',
      '了解Nodejs，能利用Express、koa进行Restful API开发',
      '了解python、gradio，能基于fastapi框架构建稳定后端接口'
    ]
  },
  {
    title: '数据库',
    icon: <Database className="h-6 w-6" />,
    skills: [
      '使用过supabase、ORM进行数据库设计与业务开发'
    ]
  },
  {
    title: 'AI与大模型',
    icon: <Brain className="h-6 w-6" />,
    skills: [
      '熟悉AIGC技术栈，使用过OpenAI Agent sdk、向量数据库Faiss',
      '了解RAG索引和检索流程，能基于LangChain.js进行Naive RAG开发',
      '擅长利用prompt技巧与cursor、deepseek、lovable协作，以planner、debugger视角进行需求规划与多端调试'
    ]
  },
  {
    title: '部署与运维',
    icon: <TerminalSquare className="h-6 w-6" />,
    skills: [
      '了解多种部署方式，使用过devbox、阿里云ECS + 宝塔linux、vercel部署项目',
      '了解docker'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-resume-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-blue mb-8 text-center">专业技能</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-resume-blue/10 text-resume-blue">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-resume-blue">{category.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-2">
                      <div className="h-5 w-5 flex-shrink-0 rounded-full bg-resume-blue/20 mt-0.5" />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
