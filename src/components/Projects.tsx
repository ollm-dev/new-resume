import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { LazyImage } from '@/components/ui/lazy-image';

const projects = [
  {
    title: '墨香逸读',
    techStack: ['Vue3', 'Pinia', 'Vant UI', 'Iconfont', 'Tailwind', 'TypeScript', 'CozeBot'],
    description: [
      '使用Vue3和Vant UI搭建页面，Tailwind CSS实现前端样式；实现假数据加载功能，封装高复用组件和动态组件',
      '借助Coze中Bot的api接口实现AI对话制作读书伴侣功能；使用keepalive缓存页面，通过路由和组件懒加载优化项目，提升页面加载速度和用户体验',
      '封装动态组件，根据对话身份验证加载不同组件，实现AI对话渲染效果；自定义hooks判断图片是否出现在视窗内，结合自定义指令v-lazy实现图片懒加载'
    ],
    link: 'https://gitee.com/luli1314520/AI-full-stack/tree/master/project/books',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'
  },
  {
    title: '卷王笔记',
    techStack: ['Vue3', 'Vant UI', 'Nest.js', 'TypeORM', 'LangChain', 'DeepSeek', 'Mysql'],
    description: [
      '利用RAG实现数据私有化、个性化；二次封装axios并利用JWT实现前后端双token无感刷新，优化用户体验',
      '利用SSE实现流式输出；使用TypeORM框架封装sql操作，进行数据查询和密码校验',
      '实现大文件上传的文件分片、断点续传、秒传功能；使用Embedding结合Document Loader、Spliter加载、切割、向量化数据，并在Vector Store(Faiss)中持久化储存',
      '将多个prompt控制的chain组装为一条RAG chain，结合Memory机制拓展llm上下文，完成私有化数据问答，通过NestJs内置Express框架部署为API'
    ],
    link: 'https://gitee.com/luli1314520/AI-full-stack/tree/master/project/RAG-project',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1400&q=80'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-blue mb-8">项目经历</h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 h-48 md:h-full">
                  <LazyImage 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-semibold text-resume-blue mb-3">{project.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">技术栈：</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-resume-blue/10 text-resume-blue text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">项目内容：</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-resume-blue hover:text-resume-accent transition-colors text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span>查看源码</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
