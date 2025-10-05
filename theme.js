/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      // === Gray ===
      gray00: '#ffffff',
      gray50: '#F9FAFB',
      gray100: '#f3f4f6',
      gray200: '#E5E7EB',
      gray300: '#D1D5DB',
      gray400: '#9CA3AF',
      gray500: '#6B7280',
      gray600: '#4B5563',
      gray700: '#374151',
      gray800: '#1F2937',
      gray900: '#111827',
      gray1000: '#1a1c20',

      // === Yellow ===
      yellow00: '#fffef9',
      yellow100: '#fffce5',
      yellow200: '#fff8b7',
      yellow300: '#fff38a',
      yellow400: '#ffef5c',
      yellow500: '#ffea2e',
      yellow600: '#fee500',
      yellow700: '#d5c000',
      yellow800: '#ac9b00',
      yellow900: '#847700',
      yellow1000: '#5b5200',

      // === Brown ===
      brown00: '#fff9f4',
      brown100: '#ffeedc',
      brown200: '#ffe2c4',
      brown300: '#f9d0a8',
      brown400: '#edbc8a',
      brown500: '#cb9a69',
      brown600: '#a97b4d',
      brown700: '#875e35',
      brown800: '#654321',
      brown900: '#432a12',
      brown1000: '#2d1b08',

      // === Blue ===
      blue00: '#f8faff',
      blue100: '#eff6ff',
      blue200: '#e2edfc',
      blue300: '#cbdffa',
      blue400: '#aacefd',
      blue500: '#85b8fd',
      blue600: '#5e98fe',
      blue700: '#217cf9',
      blue800: '#135fcd',
      blue900: '#0b4596',
      blue1000: '#032451',

      // === Red ===
      red00: '#fffafa',
      red100: '#fdf0f0',
      red200: '#fde7e7',
      red300: '#fed4d2',
      red400: '#feb7b3',
      red500: '#fe928d',
      red600: '#fc6a66',
      red700: '#fa342c',
      red800: '#ca1d13',
      red900: '#921708',
      red1000: '#4a1209',

      // === Semantic ===
      kakaoYellow: '#fee500',
      kakaoYellowHover: '#ffea2e',
      kakaoYellowActive: '#d5c000',
      kakaoBrown: '#654321',
      kakaoBrownPressed: '#432a12',

      pgBlue: '#143F90',
      pgSky: '#0275C9',
      pgGreen: '#05A552',

      background: {
        default: '#ffffff',
        disabled: '#f3f4f5',
        fill: '#f7f8f9',
      },
      text: {
        default: '#2a3038',
        sub: '#b0b3ba',
        disabled: '#dcdee3',
        placeholder: '#b0b3ba',
      },
      border: {
        default: '#dcdee3',
        disabled: '#eeeff1',
      },
      state: {
        critical: '#fa342c',
        criticalBackground: '#fdf0f0',
        info: '#217cf9',
        infoBackground: '#eff6ff',
      },
    },

    fontFamily: {
      sans: ['Pretendard', 'system-ui', 'sans-serif'],
    },

    fontSize: {
      // Title
      title1Bold: ['1.25rem', { lineHeight: '1.6875rem', fontWeight: '700' }],
      title1Regular: ['1.25rem', { lineHeight: '1.6875rem', fontWeight: '400' }],
      title2Bold: ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }],
      title2Regular: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],

      // Subtitle
      subtitle1Bold: ['1rem', { lineHeight: '1.375rem', fontWeight: '700' }],
      subtitle1Regular: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
      subtitle2Bold: ['0.875rem', { lineHeight: '1.1875rem', fontWeight: '700' }],
      subtitle2Regular: ['0.875rem', { lineHeight: '1.1875rem', fontWeight: '400' }],

      // Body
      body1Bold: ['1rem', { lineHeight: '1.375rem', fontWeight: '700' }],
      body1Regular: ['1rem', { lineHeight: '1.375rem', fontWeight: '400' }],
      body2Bold: ['0.875rem', { lineHeight: '1.1875rem', fontWeight: '700' }],
      body2Regular: ['0.875rem', { lineHeight: '1.1875rem', fontWeight: '400' }],

      // Label
      label1Bold: ['0.875rem', { lineHeight: '1.1875rem', fontWeight: '700' }],
      label1Regular: ['0.875rem', { lineHeight: '1.1875rem', fontWeight: '400' }],
      label2Bold: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],
      label2Regular: ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
    },

    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
    },
  },
};
