/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // NOTE: 본 템플릿은 대부분이 모노톤으로 이루어져 있습니다. primary 컬러만 수정하여 사용하시는 것을 권장드립니다.
      colors: {
        GRAY_LIGHT: '#f1f3f5',
        GRAY_SEMI_LIGHT: '#e5e7eb',
        GRAY: '#adb5bd',
        GRAY_SEMI_HEAVY: '#374151',
        GRAY_HEAVY: '#868e96',
        BLACK: '#212529',
        /**
         * @description selection(드래그 블록)에 사용되는 컬러입니다.
         */
        PRIMARY_LIGHT: '#c3fae8',
        /**
         * @description 자기소개의 이름 부분, code tag의 darkmode에 사용되는 컬러입니다.
         */
        PRIMARY: '#12b886',
        /**
         * @description code tag, link hover icon에 사용되는 컬러입니다.
         */
        PRIMARY_HEAVY: '#087f5b',
        /**
         * @description 페이지 최상단 gradient의 시작 컬러입니다.
         */
      },
    },
  },
  plugins: [],
};
