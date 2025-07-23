'use client';

import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useInViewSection } from "./useInViewSection";

const TestimonialsSection = () => {
  const { ref, inView } = useInViewSection();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const testimonials = [
    {
      title: "자리 차지가 적고,\n매장의 무드를 해치지 않아요",
      company: "떙땡커피, 본점",
      image: "https://www.gicon.or.kr/galleryImgView.es?bid=0001&list_no=1285&seq=5",
      gradient: "from-gray-800 to-gray-600"
    },
    {
      title: "브랜딩, 서비스\n측면에서 너무 좋아요",
      company: "헝그리정신, 성수",
      image: "https://www.gicon.or.kr/galleryImgView.es?bid=0001&list_no=1285&seq=5", 
      gradient: "from-gray-700 to-gray-500"
    },
    {
      title: "재주문률과 사이드\n주문 건수가 확 늘었어요",
      company: "브루어리, 광주",
      image: "https://www.gicon.or.kr/galleryImgView.es?bid=0001&list_no=1285&seq=5",
      gradient: "from-gray-600 to-gray-400"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1);
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      scrollToSlide(currentSlide - 1);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth * 0.65;
      const scrollLeft = sliderRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth * 0.65; // 1.5개 카드를 위한 너비
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={ref}
      className={`py-20 md:py-32 bg-white transition-all duration-1000 ${inView ? 'slide-right-in' : 'slide-right-init'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            아이젠과 함께하고<br />
            우리 회사가 이렇게 변했어요
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed md:block hidden"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === testimonials.length - 1}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed md:block hidden"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto scrollbar-hide gap-4 px-6"
              style={{ scrollSnapType: 'x mandatory' }}
              onScroll={handleScroll}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="relative flex-none w-[65vw] h-96 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/400x400/6b7280/ffffff?text=Store+Image";
                      }}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${testimonial.gradient} opacity-70`}></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-xl font-bold leading-tight mb-3 whitespace-pre-line">
                      {testimonial.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative h-96 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400x400/6b7280/ffffff?text=Store+Image";
                    }}
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${testimonial.gradient} opacity-70`}></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 whitespace-pre-line">
                    {testimonial.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {testimonial.company}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  scrollToSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-primary-blue font-medium hover:text-blue-700 transition-colors">
            더 많은 성공사례 보기
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;