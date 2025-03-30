import React from 'react';
import { BookOpen, Activity, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LazyImage } from '@/components/ui/lazy-image';

const interests = [
  {
    title: '阅读',
    icon: <BookOpen className="h-8 w-8" />,
    description: '热衷于阅读技术书籍和前沿科技资讯，通过阅读不断拓宽自己在计算机领域的知识面，紧跟行业发展趋势。同时，也喜欢阅读科幻小说，丰富想象力，从科幻作品中获取对未来技术发展的灵感，为自己的开发工作带来新的思路。',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    title: '运动健身',
    icon: <Activity className="h-8 w-8" />,
    description: '保持定期运动的习惯，热爱篮球和慢跑。篮球运动培养了团队协作精神和竞争意识，在球场上与队友配合，共同追求胜利，这种团队协作的体验也被应用到项目开发团队中。慢跑则帮助缓解工作压力，保持良好的身体状态和精神状态，让自己在高强度的学习和工作中始终保持充沛的精力。',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80'
  },
  {
    title: '参加技术交流活动',
    icon: <Users className="h-8 w-8" />,
    description: '积极参与各类线上线下的技术交流社区和研讨会，与同行们分享技术心得、探讨行业难题。在交流过程中，不仅能学到新的技术知识和开发技巧，还能结识来自不同领域的技术人才，拓展人脉资源，为自己的职业发展创造更多机会。',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  }
];

const Interests = () => {
  return (
    <section id="interests" className="py-12 bg-resume-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-blue mb-8 text-center">兴趣爱好</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="h-48 overflow-hidden">
                <LazyImage 
                  src={interest.image} 
                  alt={interest.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-resume-blue/10 text-resume-blue">
                    {interest.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-resume-blue">{interest.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
