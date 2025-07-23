import { ArrowRight, Calendar } from "lucide-react";
import { useInViewSection } from "./useInViewSection";

const AboutSection = () => {
  const { ref, inView } = useInViewSection();
  const contentList = [
    {
      title: "스타트업 성장 전략: 컴퍼니빌딩의 핵심 요소 스타트업 성장 전략: 컴퍼니빌딩의 핵심 요소 스타트업 성장 전략: 컴퍼니빌딩의 핵심 요소 스타트업 성장 전략: 컴퍼니빌딩의 핵심 요소",
      image: "https://www.gicon.or.kr/galleryImgView.es?bid=0001&list_no=1285&seq=5",
      date: "2024.12.15"
    },
    {
      title: "AI 기반 채용 솔루션의 미래와 전망",
      image: "https://www.gicon.or.kr/galleryImgView.es?bid=0001&list_no=1285&seq=5",
      date: "2024.12.10"
    },
    {
      title: "성공적인 투자 유치를 위한 피칭 가이드", 
      image: "https://www.gicon.or.kr/galleryImgView.es?bid=0001&list_no=1285&seq=5",
      date: "2024.12.05"
    }
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-opacity duration-1000 ${inView ? 'fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="text-primary-blue font-semibold rounded-full text-lg mb-4">
                Company Builder
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              스타트업 발굴부터
              <br />
              성장까지 함께하는
              <br />
              <span className="text-primary-blue">원스톱 솔루션.</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              IGEN의 독자적인 컴퍼니빌딩 기술을 이용한 '맞춤형 성장'으로
              <br />
              차별화된 비즈니스 모델에 상관없이 최적의 성장 서비스를 경험할 수 있습니다.
            </p>
            
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary-blue text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              <span>컴퍼니빌딩 서비스 더 알아보기</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Right Content List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">최신 콘텐츠</h3>
              <button className="text-primary-blue hover:text-blue-700 font-medium text-sm flex items-center">
                전체 보기
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="space-y-4">
              {contentList.map((content, index) => (
                <a 
                  key={index}
                  href="#"
                  className="flex items-center space-x-4 rounded-md hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-36 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/80x64/f3f4f6/9ca3af?text=IMG";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-primary-blue transition-colors leading-snug mb-2 overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical' as const
                    }}>
                      {content.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {content.date}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;