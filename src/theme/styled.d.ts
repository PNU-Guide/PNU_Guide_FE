import 'styled-components';

type TypographyVariant = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number | string;
  letterSpacing?: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: { main: string; light: string; dark: string };
      secondary: { main: string; light: string; dark: string };
      background: { default: string; paper: string; heroOverlay: string };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        onDark: string;
      };
      divider: string;
      surface: { card: string; nav: string; chip: string };
      states: { hover: string; active: string };
    };
    typography: {
      fontFamily: string;
      h1: TypographyVariant;
      h2: TypographyVariant;
      subtitle1: TypographyVariant;
      body1: TypographyVariant;
      body2: TypographyVariant;
      caption: TypographyVariant;
      overline: TypographyVariant;
    };
    spacing: (factor: number) => string;
    shape: {
      borderRadiusLg: string;
      borderRadiusMd: string;
      borderRadiusSm: string;
      borderRadiusXs: string;
    };
    elevation: {
      card: string;
      nav: string;
    };
    breakpoints: {
      tablet: string;
      desktop: string;
    };
  }
}
