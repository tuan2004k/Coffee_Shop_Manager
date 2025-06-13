/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Thêm cấu hình để vô hiệu hóa oklch
  corePlugins: {
    colors: (context) => ({
      ...context.theme('colors'),
      // Định nghĩa lại các màu mặc định bằng hex hoặc rgb
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      },
      // Thêm các màu khác nếu cần (red, green, v.v.)
    }),
  },
  // Bỏ qua các tính năng thử nghiệm hoặc không hỗ trợ
  experimental: {
    optimizeUniversalDefaults: true,
  },
};