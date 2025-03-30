import React, { useState, useEffect, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/**
 * 懒加载图片组件属性接口
 * @interface LazyImageProps
 * @extends {ImgHTMLAttributes<HTMLImageElement>} 继承原生img元素的所有属性
 */
interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** 
   * 图片加载前显示的占位图 URL
   * @default "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z' opacity='.25'/%3E%3Cpath d='M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z'%3E%3CanimateTransform attributeName='transform' dur='0.75s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'/%3E%3C/path%3E%3C/svg%3E"
   */
  placeholderSrc?: string;
  /** 
   * 图片容器的类名
   */
  wrapperClassName?: string;
}

/**
 * 懒加载图片组件，支持渐进式加载效果
 * 
 * @param {LazyImageProps} props - 组件属性
 * @returns {JSX.Element} LazyImage 组件
 * 
 * @example
 * ```tsx
 * <LazyImage 
 *   src="https://example.com/image.jpg" 
 *   alt="Example" 
 *   className="w-full h-full object-cover" 
 * />
 * ```
 */
const LazyImage = ({
  src,
  alt,
  className,
  placeholderSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z' opacity='.25'/%3E%3Cpath d='M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z'%3E%3CanimateTransform attributeName='transform' dur='0.75s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'/%3E%3C/path%3E%3C/svg%3E",
  wrapperClassName,
  ...props
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(placeholderSrc);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // 创建一个新的图片对象来预加载
    const img = new Image();
    img.src = src || '';
    
    // 当图片加载完成时更新状态
    img.onload = () => {
      setImageSrc(src || '');
      setImageLoaded(true);
    };
    
    // 处理图片加载失败的情况
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      // 保持占位图
    };
    
    // 清理函数
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300 ease-in-out",
          !imageLoaded && "opacity-50",
          className
        )}
        loading="lazy" // 添加原生懒加载属性
        {...props}
      />
    </div>
  );
};

export { LazyImage }; 