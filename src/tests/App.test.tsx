import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import App from '../App';

describe('App 컴포넌트', () => {
  it('로그인 페이지를 렌더링한다', () => {
    render(<App />);

    // App이 Login 컴포넌트를 렌더링하므로, Login 페이지의 대표적인 텍스트를 확인합니다.
    expect(screen.getByText('부산대학교 공식 캠퍼스 투어')).toBeInTheDocument();
  });
});
