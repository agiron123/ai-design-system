import { describe, expect, it } from 'vitest';
import { cn } from './utils.ts';

describe('cn', () => {
  it('keeps the last conflicting Tailwind class', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('joins unrelated classes', () => {
    expect(cn('px-2', 'py-4')).toBe('px-2 py-4');
  });
});
