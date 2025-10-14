import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi, beforeEach } from 'vitest';

import Login from '../../../src/pages/Login.tsx';

// 테스트 환경에서는 window.alert가 없으므로, 모의 함수로 대체합니다.
// 이를 통해 alert가 호출되었는지 여부를 테스트에서 확인할 수 있습니다.
global.alert = vi.fn();

describe('Login 페이지', () => {
  // beforeEach: 각 테스트 케이스가 실행되기 전에 실행되는 함수입니다.
  // 여기서는 각 테스트가 독립적으로 실행되도록 alert 모의 함수의 호출 기록을 초기화합니다.
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('페이지의 주요 UI 요소들이 올바르게 렌더링되어야 합니다.', () => {
    // Arrange & Act
    render(<Login />);

    // Assert: 각 요소가 화면에 보이는지 확인합니다.
    // 텍스트로 요소 찾기
    expect(screen.getByText('부산대학교 공식 캠퍼스 투어')).toBeInTheDocument();

    // alt 텍스트로 이미지 찾기 (웹 접근성을 위해 alt 속성은 매우 중요합니다)
    expect(screen.getByAltText('부산대학교 로고')).toBeInTheDocument();
    expect(screen.getByAltText('PNU Guide')).toBeInTheDocument();

    // 버튼의 역할(role)과 이름(accessible name)으로 찾기
    const kakaoButton = screen.getByRole('button', {
      name: /카카오로 시작하기/i,
    });
    expect(kakaoButton).toBeInTheDocument();
  });

  test('"카카오로 시작하기" 버튼을 클릭하면 로그인 핸들러가 호출되어야 합니다.', () => {
    // Arrange
    render(<Login />);
    const kakaoButton = screen.getByRole('button', {
      name: /카카오로 시작하기/i,
    });

    // Act: 사용자가 버튼을 클릭하는 것을 시뮬레이션합니다.
    fireEvent.click(kakaoButton);

    // Assert: alert 함수가 정확한 메시지와 함께 1번 호출되었는지 확인합니다.
    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith('카카오로 시작하기!');
  });
});
