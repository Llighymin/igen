'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          스타트업의 성공적인 성장,<br />
          <span className="text-primary-blue">아이젠과 함께 시작하세요</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          혁신적인 컴퍼니빌딩 솔루션으로 당신의 비즈니스를 다음 단계로 이끌어드립니다.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-primary-blue hover:bg-blue-700 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          무료 상담 신청하기
        </Link>
      </div>
    </section>
  );
}