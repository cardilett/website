import { defineConfig } from 'vitest/config';

// These tests read source files as text (no DOM render needed), so the plain
// Node environment is enough. See tests/README.md for what they verify.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
