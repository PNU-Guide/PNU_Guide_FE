import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/App';

describe('App 컴포넌트', () => {
  it('Tailwind 인사 문구를 렌더링한다', () => {
    render(<App />);

    expect(screen.getByText('Hello Tailwind!')).toBeInTheDocument();
  });
});
