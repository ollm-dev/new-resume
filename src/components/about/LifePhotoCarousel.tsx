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
    <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
      <div className="flex items-center gap-4 mb-8">
        <Camera className="text-resume-blue h-7 w-7" />
        <h3 className="text-2xl font-semibold text-resume-blue">生活掠影</h3>
      </div>
      
      <div className="relative px-12">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <AspectRatio ratio={4/3}>
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="学习日常" 
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </AspectRatio>
                  <CardContent className="p-5">
                    <h4 className="font-medium text-gray-900 mb-2">专注学习</h4>
                    <p className="text-sm text-gray-600">钻研技术，持续学习是我的日常</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <AspectRatio ratio={4/3}>
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                      alt="户外休闲" 
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </AspectRatio>
                  <CardContent className="p-5">
                    <h4 className="font-medium text-gray-900 mb-2">亲近自然</h4>
                    <p className="text-sm text-gray-600">户外活动让我保持身心平衡</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <AspectRatio ratio={4/3}>
                    <LazyImage 
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                      alt="团队协作" 
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </AspectRatio>
                  <CardContent className="p-5">
                    <h4 className="font-medium text-gray-900 mb-2">团队协作</h4>
                    <p className="text-sm text-gray-600">与伙伴们一起解决问题的瞬间</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </Carousel>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-700 italic">
          "生活不只有代码，保持平衡才能走得更远"
        </p>
      </div>
    </div>
  );
};

export default LifePhotoCarousel; 