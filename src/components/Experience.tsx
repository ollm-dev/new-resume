
import React from 'react';
import { CalendarDays, Briefcase, Code, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-blue mb-8">实习经历</h2>
        
        <div className="bg-resume-gray p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="mb-3 md:mb-0">
              <h3 className="text-xl font-semibold">北京爱乐尔科技公司(Airacle)</h3>
              <p className="text-gray-600">AI全栈开发实习生</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>2025-02 ~ 2025-02</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-resume-blue mb-3">
                <span className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  AI科研聚合网站
                </span>
              </h4>
              
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-600">技术栈：</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['nextjs', 'react', 'shadcn', 'tailwindcss', 'Supbase', 'Auth.js', 'Stripe', 'aisdk'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-resume-blue/10 text-resume-blue text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">工作成果：</h5>
                <ul className="space-y-2">
                  {[
                    '利用next-intl实现全面国际化，通过AITDK插件进行网页SEO走查，利用prompt驱动cursor提升landing page关键词密度',
                    '自主封装AI Detector和Humanizer组件并优化，布局抽离为服务端组件，交互逻辑为客户端组件，减少bundle包大小；封装ai-detector和ai-humanizer接口，进行AI查重测试，提升系统准确性和稳定性',
                    '基于Auth.js框架完成Github、Google国外平台登录鉴权，实现网页端微信扫码登陆'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-resume-blue mb-3">
                <span className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  DeepInsight
                </span>
              </h4>
              
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-600">技术栈：</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['nextjs', 'python', 'fastapi', 'deepseek-r1-250120'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-resume-blue/10 text-resume-blue text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-medium text-gray-600 mb-2">工作成果：</h5>
                <ul className="space-y-2">
                  {[
                    '结合甲方表格截图，利用Loveable实现简约现代化初版ui，使用cursor提取AI填充表格所需json',
                    '封装AI analysis组件，自定义hooks useSSE，基于SSE技术对deepseek中content、reasoning_content缓存过滤并流式渲染，添加样式到文档头保证渲染稳定性，控制文字流速，实现窗口智能滚动和用户行为监听',
                    '封装useReviewFom，监听后端流式响应，修复json数据并实现容错机制，保证正确映射到指定表格体',
                    '优化python后端SSE响应速度，开三个线程并行启动任务，主异步函数从队列实时获取结果返回前端，响应速度优化40s',
                    '通过SSH登录远程服务器，打包构建前后端代码并部署上线交付第一版'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
