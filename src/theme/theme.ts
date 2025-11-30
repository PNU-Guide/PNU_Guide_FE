import { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

const baseSpacing = 4;

const theme: DefaultTheme = {
  palette: {
    primary: {
      main: '#0057ff',
      light: '#4f86ff',
      dark: '#003bb3',
    },
    secondary: {
      main: '#00b894',
      light: '#55e3c4',
      dark: '#00856a',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      heroOverlay: 'rgba(0, 0, 0, 0.35)',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      disabled: '#9ca3af',
      onDark: '#ffffff',
    },
    divider: '#e5e7eb',
    surface: {
      card: '#ffffff',
      nav: '#ffffff',
      chip: '#f3f4ff',
    },
    states: {
      hover: 'rgba(15, 23, 42, 0.04)',
      active: 'rgba(15, 23, 42, 0.08)',
    },
  },
  typography: {
    fontFamily:
      "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    h1: {
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    overline: {
      fontSize: '10px',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.08em',
    },
  },
  spacing: (factor) => `${factor * baseSpacing}px`,
  shape: {
    borderRadiusLg: '20px',
    borderRadiusMd: '16px',
    borderRadiusSm: '12px',
    borderRadiusXs: '8px',
  },
  elevation: {
    card: '0 10px 30px rgba(15, 23, 42, 0.08)',
    nav: '0 -4px 20px rgba(15, 23, 42, 0.12)',
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  },
};

type TypographyKey = Exclude<keyof DefaultTheme['typography'], 'fontFamily'>;

export const typographyMixin = (variant: TypographyKey) => css`
  font-size: ${({ theme }) => theme.typography[variant].fontSize};
  font-weight: ${({ theme }) => theme.typography[variant].fontWeight};
  line-height: ${({ theme }) => theme.typography[variant].lineHeight};
  ${({ theme }) =>
    theme.typography[variant].letterSpacing
      ? `letter-spacing: ${theme.typography[variant].letterSpacing};`
      : ''}
`;

export default theme;
