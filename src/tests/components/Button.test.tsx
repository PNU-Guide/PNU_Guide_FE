import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest';

import Button from '../../components/Button.tsx';

// describe: 'Button 컴포넌트'라는 테스트 그룹을 정의합니다.
describe('Button 컴포넌트', () => {
  // test (it): 개별 테스트 케이스를 정의합니다.
  // 첫 번째 테스트: 버튼이 자식 요소를 올바르게 렌더링하는지 확인합니다.
  test('주어진 children을 올바르게 렌더링해야 합니다.', () => {
    // Arrange (준비): 테스트에 필요한 환경을 설정합니다.
    const buttonText = '테스트 버튼';

    // Act (실행): 테스트할 컴포넌트를 렌더링합니다.
    render(<Button onClick={() => {}}>{buttonText}</Button>);

    // Assert (검증): `screen.getByRole`을 사용하여 의미론적으로 버튼을 찾고,
    // 해당 버튼이 문서에 존재하는지 확인합니다.
    const buttonElement = screen.getByRole('button', { name: buttonText });
    expect(buttonElement).toBeInTheDocument();
  });

  // 두 번째 테스트: 버튼 클릭 시 onClick 핸들러가 호출되는지 확인합니다.
  test('버튼 클릭 시 onClick 핸들러가 호출되어야 합니다.', () => {
    // Arrange
    const handleClick = vi.fn(); // vitest의 모의(mock) 함수 vi.fn()을 사용합니다.
    render(<Button onClick={handleClick}>클릭!</Button>);
    const buttonElement = screen.getByRole('button', { name: '클릭!' });

    // Act
    fireEvent.click(buttonElement); // `fireEvent`로 사용자 클릭을 시뮬레이션합니다.

    // Assert
    // 모의 함수가 정확히 1번 호출되었는지 검증합니다.
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 세 번째 테스트: 아이콘 prop이 전달될 때 아이콘이 렌더링되는지 확인합니다.
  test('icon prop이 제공되면 아이콘을 렌더링해야 합니다.', () => {
    // Arrange
    const icon = <img src="icon.svg" alt="아이콘" />;
    render(
      <Button onClick={() => {}} icon={icon}>
        아이콘 버튼
      </Button>,
    );

    // Assert
    // `getByAltText`를 사용하여 alt 속성으로 이미지를 찾습니다. 웹 접근성에 중요합니다.
    const iconElement = screen.getByAltText('아이콘');
    expect(iconElement).toBeInTheDocument();
  });

  // 네 번째 테스트: disabled prop이 true일 때 버튼이 비활성화되는지 확인합니다.
  test('disabled prop이 true일 때 비활성화 상태여야 합니다.', () => {
    // Arrange
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        비활성 버튼
      </Button>,
    );
    const buttonElement = screen.getByRole('button', { name: '비활성 버튼' });

    // Act
    fireEvent.click(buttonElement);

    // Assert
    // 버튼이 비활성화(disabled) 상태인지 확인합니다.
    expect(buttonElement).toBeDisabled();
    // 비활성화된 버튼은 클릭되어도 핸들러가 호출되지 않아야 합니다.
    expect(handleClick).not.toHaveBeenCalled();
  });
});
