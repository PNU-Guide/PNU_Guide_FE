import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import App from '../App';

describe('App 컴포넌트', () => {
  it('자식 라우트 컴포넌트를 올바르게 렌더링한다', () => {
    const TestChildComponent = () => <div>테스트 페이지</div>;

    render(
      <MemoryRouter initialEntries={['/test-route']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="test-route" element={<TestChildComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('테스트 페이지')).toBeInTheDocument();
  });
});
