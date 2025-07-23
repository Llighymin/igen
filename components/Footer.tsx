'use client';

import { Youtube, Instagram, Linkedin, MessageSquare, ChevronDown } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/company", label: "기업개요" },
    { href: "/company/history", label: "공지사항" },
    { href: "/company/vision", label: "미디어센터" }
  ],
  business: [
    { href: "/business", label: "사업개요" },
    { href: "/business/research", label: "연구개발" },
    { href: "/business/manufacturing", label: "생산" },
    { href: "/business/distribution", label: "유통" }
  ],
  products: [
    { href: "/products", label: "허가제품" },
    { href: "/products/pipeline", label: "파이프라인" }
  ],
  esg: [
    { href: "/esg/environment", label: "환경" },
    { href: "/esg/social", label: "사회" },
    { href: "/esg/governance", label: "지배구조" },
    { href: "/esg/report", label: "ESG 자료실" }
  ],
  investor: [
    { href: "/investor", label: "재무정보" },
    { href: "/investor/disclosure", label: "주가정보" },
    { href: "/investor/governance", label: "공고·공시" },
    { href: "/investor/ir", label: "IR 자료실" }
  ],
  talent: [
    { href: "/careers", label: "인재상" },
    { href: "/careers/benefits", label: "채용정보" },
    { href: "/careers/notice", label: "채용공고" }
  ]
};

const legalLinks = [
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/legal", label: "법적고지" },
  { href: "/security", label: "수출입경영방침" },
  { href: "/compliance", label: "공시정보관리규정" },
  { href: "/contact", label: "고객센터" },
  { href: "/ethics", label: "오시는 길" }
];

const socialLinks = [
  { href: "https://blog.naver.com/igen_company", label: "Blog", icon: MessageSquare },
  { href: "https://www.instagram.com/igen_official/", label: "Instagram", icon: Instagram },
  { href: "https://www.youtube.com/@igencompany", label: "Youtube", icon: Youtube },
  { href: "https://www.facebook.com/igencompany", label: "Facebook", icon: Instagram },
  { href: "https://www.linkedin.com/company/igen-inc/", label: "LinkedIn", icon: Linkedin }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold mb-4">기업소개</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">사업영역</h3>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">제품정보</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">ESG</h3>
            <ul className="space-y-3">
              {footerLinks.esg.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">투자</h3>
            <ul className="space-y-3">
              {footerLinks.investor.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">인재채용</h3>
            <ul className="space-y-3">
              {footerLinks.talent.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Logo and Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-white mr-4">
                IGEN
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 mb-6">
              {legalLinks.map((link, index) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Company Information */}
            <div className="space-y-2 text-sm text-gray-400">
              <p>기업명: 주식회사 아이젠 | 대표자: 최근영</p>
              <p>본사주소: 광주광역시 동구 금남로 1-1 전일빌딩 245, 620호</p>
              <p>지사주소: 전라남도 나주시 상야로 00</p>
              <p className="pt-2">© IGEN INC. ALL RIGHTS RESERVED</p>
            </div>
          </div>

          {/* Family Site Dropdown and Social Links */}
          <div className="flex flex-col items-end space-y-4">
            <div className="relative">
              <button className="bg-gray-800 border border-gray-600 rounded px-4 py-2 text-sm text-gray-300 flex items-center hover:bg-gray-700 transition-colors">
                Family Site
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="flex items-center space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.label}`}
                  className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}