import React from 'react';
import { Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { LazyImage } from '@/components/ui/lazy-image';

/**
 * @component LifePhotoCarousel
 * @description 生活掠影轮播图组件，展示个人生活照片
 * @returns {JSX.Element} 渲染的轮播图组件
 */
const LifePhotoCarousel = () => {
  return (
    <div className="bg-resume-neutral rounded-3xl p-8 md:p-10 shadow-soft border border-white/40 hover:shadow-purple transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-resume-purple/10 rounded-xl flex-shrink-0">
          <Camera className="h-7 w-7 text-resume-purple" />
        </div>
        <h3 className="text-2xl font-semibold purple-gradient-text">生活掠影</h3>
      </div>
      
      <div className="relative px-12">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 bg-white border-0 rounded-2xl group">
                  <AspectRatio ratio={4/3}>
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="学习日常" 
                      className="object-cover w-full h-full rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-resume-darkGray mb-2">专注学习</h4>
                    <p className="text-gray-600">钻研技术，持续学习是我的日常</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 bg-white border-0 rounded-2xl group">
                  <AspectRatio ratio={4/3}>
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                      alt="户外休闲" 
                      className="object-cover w-full h-full rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-resume-darkGray mb-2">亲近自然</h4>
                    <p className="text-gray-600">户外活动让我保持身心平衡</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 bg-white border-0 rounded-2xl group">
                  <AspectRatio ratio={4/3}>
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                      alt="团队协作" 
                      className="object-cover w-full h-full rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-resume-darkGray mb-2">团队协作</h4>
                    <p className="text-gray-600">与伙伴们一起解决问题的瞬间</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-1 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:bg-white" />
          <CarouselNext className="right-1 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:bg-white" />
        </Carousel>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-700 italic px-6 py-4 bg-white/40 rounded-xl inline-block max-w-xl shadow-sm backdrop-blur-xs">
          "生活不只有代码，保持平衡才能走得更远"
        </p>
      </div>
    </div>
  );
};

export default LifePhotoCarousel; 