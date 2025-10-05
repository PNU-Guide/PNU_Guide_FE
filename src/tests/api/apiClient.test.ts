import { describe, expect, it } from 'vitest';

import { fetchGreeting } from '@/api/apiClient';

describe('fetchGreeting', () => {
  it('MSW로 모킹된 인사 데이터를 반환한다', async () => {
    await expect(fetchGreeting()).resolves.toEqual({ greeting: 'hello' });
  });
});
