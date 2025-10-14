import React from 'react';

// 표준에 따라 에셋은 src/assets 폴더에서 관리하는 것을 권장합니다.
import pnuLogoText from '../assets/PNUGUIDE.png';
import pnuLogo from '../assets/로고.png';
import backgroundImage from '../assets/부산대배경.png';
import kakaoIcon from '../assets/카카오로그인.png';
import Button from '../components/Button.tsx';

const Login: React.FC = () => {
  const handleLogin = () => {
    // TODO: 실제 카카오 로그인 로직으로 교체
    alert('카카오로 시작하기!');
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 배경 위에 반투명 오버레이와 콘텐츠를 함께 배치합니다. */}
      <div className="relative flex flex-grow flex-col items-center justify-between bg-black/50 p-5">
        {/* Spacer: 중앙 콘텐츠를 아래로 밀어냅니다. */}
        <div className="flex-grow" />

        {/* 중앙 콘텐츠 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={pnuLogo}
            alt="부산대학교 로고"
            className="mb-6 h-[120px] w-[150px]"
          />
          <span className="text-label1Regular mb-3.5 text-gray-200">
            부산대학교 공식 캠퍼스 투어
          </span>
          <img
            src={pnuLogoText}
            alt="PNU Guide"
            className="h-[44px] w-[328px]"
          />
        </div>

        {/* Spacer: 하단 버튼을 위로 밀어냅니다. */}
        <div className="flex-grow" />

        {/* 하단 버튼 및 홈 인디케이터 */}
        <div className="w-full max-w-sm self-center">
          <Button
            onClick={handleLogin}
            icon={<img src={kakaoIcon} alt="" className="h-6 w-6" />}
          >
            카카오로 시작하기
          </Button>
        </div>
        {/* 모바일 홈 인디케이터 (디자인 요소) */}
      </div>
    </div>
  );
};

export default Login;
