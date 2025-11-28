import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/App';

describe('App 컴포넌트', () => {
  it('홈 화면 히어로 타이틀을 렌더링한다', () => {
    render(<App />);

    expect(
      screen.getByText(/홍보대사가 추천하는 부산대 코스 TOP8은\?/i),
    ).toBeInTheDocument();
  });
});
