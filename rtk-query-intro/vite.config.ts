import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // vitest config
  test: {
    globals: true,          // gives access to global test functions: describe(), it(), expect(), etc.
    environment: 'jsdom',   // a virtual DOM to work with during our tests
    setupFiles: './src/tests/setupTests.ts'
  }
})
