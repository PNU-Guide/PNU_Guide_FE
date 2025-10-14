import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

/**
 * 공용 버튼 컴포넌트
 * @param {object} props
 * @param {'primary' | 'secondary'} [props.variant='primary'] - 버튼 종류
 * @param {React.ReactNode} props.children - 버튼 내용
 * @param {() => void} props.onClick - 클릭 핸들러
 * @param {React.ReactNode} [props.icon] - 버튼 좌측에 표시될 아이콘
 * @param {string} [props.className] - 추가적인 스타일 클래스
 * @param {boolean} [props.disabled=false] - 비활성화 여부
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  icon,
  className = '',
  disabled = false,
}) => {
  const baseStyle =
    'flex w-full items-center justify-center gap-2 rounded-lg border-0 px-5 py-3 text-body1Regular disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-kakaoYellow text-kakaoBrown hover:bg-kakaoYellowHover active:bg-kakaoYellowActive disabled:bg-background-disabled disabled:text-text-disabled',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
