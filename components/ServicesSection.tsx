"use client";

import { useState } from "react";
import Image from "next/image";

const serviceTabs = [
  {
    key: 'consulting',
    label: '경영컨설팅',
    title: '경영컨설팅',
    desc: '경영컨설팅 프로그램 운영, 경영진단 및 평가, 경영전략 컨설팅, 인사/노무 컨설팅',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: ['경영진단 및 평가', '경영전략 컨설팅', '인사/노무 컨설팅'],
  },
  {
    key: 'rnd',
    label: '기술사업화',
    title: '기술사업화 전문 연구개발 서비스',
    desc: '산업분석, BM구축, 마케팅 지원, 국내 30여개 상장기업 및 중견기업 네트워크 구축',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: ['산업분석', 'BM구축', '마케팅 지원'],
  },
  {
    key: 'accelerating',
    label: '컴퍼니빌딩',
    title: '컴퍼니빌딩(엑셀러레이팅)',
    desc: '스타트업 발굴 및 육성, 투자 및 자금조달 지원, 초기기업을 위한 엑셀러레이팅 프로그램 운영',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: ['스타트업 발굴', '투자 지원', '엑셀러레이팅'],
  },
  {
    key: 'incubation',
    label: '창업보육',
    title: '기업형 창업 보육센터',
    desc: '창업보육센터 운영',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: ['창업보육센터 운영'],
  },
  {
    key: 'ma',
    label: 'M&A 자문',
    title: 'M&A 자문',
    desc: 'M&A/PEF 자산운용 등 안정단계의 기업을 위한 서비스 제공, 호남 유일 M&A 자문기관',
    image: 'https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: ['M&A/PEF 자산운용'],
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].key);

  const activeService = serviceTabs.find(service => service.key === activeTab) || serviceTabs[0];

  return (
    <section id="services-section" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            전문 서비스 라인업
          </h2>
          <p className="text-lg text-gray-600">
            IGEN은 스타트업부터 안정단계 기업까지, 성장 단계별 맞춤형 서비스를 제공하여 
            지속 가능한 성장을 지원합니다.
          </p>
        </div>
        <div
          id="service-tabs"
          className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12 border-b"
        >
          {serviceTabs.map((service) => (
            <button
              key={service.key}
              className={`service-tab ${activeTab === service.key ? "active" : ""}`}
              onClick={() => setActiveTab(service.key)}
            >
              {service.label}
            </button>
          ))}
        </div>
        <div id="service-content" className="relative">
          <div
            className="service-panel active"
            style={{ animation: "content-fade-in 0.6s ease-out" }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-xl text-primary-blue font-bold">
                  {activeService.title}
                </h3>
                <p className="text-3xl md:text-4xl font-bold mt-2 mb-8">
                  {activeService.title}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  {activeService.desc}
                </p>
                <div className="space-y-2 text-gray-600">
                  {activeService.links.map((link, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                      <span>{link}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={activeService.image}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="service-image"
                  alt={activeService.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .service-tab {
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 700;
          color: #888;
          border-bottom: 3px solid transparent;
          transition: color 0.3s, border-color 0.3s;
          margin-bottom: -2px;
        }
        @media (min-width: 768px) {
          .service-tab {
            font-size: 1.125rem;
          }
        }
        .service-tab:hover {
          color: var(--primary-blue);
        }
        .service-tab.active {
          color: var(--nhn-black);
          border-bottom-color: var(--primary-blue);
        }
        .service-panel {
          display: none;
        }
        .service-panel.active {
          display: block;
        }
        @keyframes content-fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .service-image {
          transition: transform 0.5s ease-out;
        }
        .service-panel.active .service-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
