'use client';

import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface CarouselProps {
    children: ReactNode[];
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
    loop?: boolean;
    className?: string;
}

export function Carousel({
    children,
    autoPlay = false,
    interval = 3000,
    showArrows = true,
    showDots = true,
    loop = true,
    className,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const totalSlides = React.Children.count(children);

    const goToSlide = useCallback((index: number) => {
        if (loop) {
            setCurrentIndex((index + totalSlides) % totalSlides);
        } else {
            setCurrentIndex(Math.max(0, Math.min(index, totalSlides - 1)));
        }
    }, [loop, totalSlides]);

    const goToPrev = () => goToSlide(currentIndex - 1);
    const goToNext = () => goToSlide(currentIndex + 1);

    // Auto play
    useEffect(() => {
        if (!autoPlay || isHovered) return;

        const timer = setInterval(() => {
            goToNext();
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, isHovered, currentIndex]);

    return (
        <div
            className={cn('x-carousel relative overflow-hidden rounded-xl', className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slides */}
            <div
                className="x-carousel-slides flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className="x-carousel-slide w-full flex-shrink-0"
                    >
                        {child}
                    </div>
                ))}
            </div>

            {/* Arrows */}
            {showArrows && totalSlides > 1 && (
                <>
                    <button
                        onClick={goToPrev}
                        disabled={!loop && currentIndex === 0}
                        className={cn(
                            'x-carousel-arrow absolute left-4 top-1/2 -translate-y-1/2',
                            'w-10 h-10 rounded-full',
                            'bg-black/50 backdrop-blur-sm',
                            'flex items-center justify-center',
                            'text-white transition-all',
                            'hover:bg-black/70',
                            'disabled:opacity-30 disabled:cursor-not-allowed'
                        )}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        disabled={!loop && currentIndex === totalSlides - 1}
                        className={cn(
                            'x-carousel-arrow absolute right-4 top-1/2 -translate-y-1/2',
                            'w-10 h-10 rounded-full',
                            'bg-black/50 backdrop-blur-sm',
                            'flex items-center justify-center',
                            'text-white transition-all',
                            'hover:bg-black/70',
                            'disabled:opacity-30 disabled:cursor-not-allowed'
                        )}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Dots */}
            {showDots && totalSlides > 1 && (
                <div className="x-carousel-dots absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                'w-2 h-2 rounded-full transition-all',
                                index === currentIndex
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/70'
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
