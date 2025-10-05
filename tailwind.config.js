import plugin from 'tailwindcss/plugin';
import sharedTheme from './theme.js';

const { content, theme } = sharedTheme;

const flattenColors = (colors, prefix = []) => {
  const entries = Object.entries(colors ?? {});
  return entries.reduce((acc, [key, value]) => {
    const path = [...prefix, key];
    if (value && typeof value === 'object') {
      Object.assign(acc, flattenColors(value, path));
    } else {
      acc[path.join('-')] = value;
    }
    return acc;
  }, {});
};

const customColors = flattenColors(theme?.colors);

/** @type {import('tailwindcss').Config} */
const config = {
  content,
  theme: {
    extend: {
      colors: customColors,
      fontFamily: theme?.fontFamily,
      fontSize: theme?.fontSize,
      spacing: theme?.spacing,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = Object.fromEntries(
        Object.entries(customColors).flatMap(([token, value]) => [
          [`.bg-${token}`, { backgroundColor: value }],
          [`.text-${token}`, { color: value }],
          [`.border-${token}`, { borderColor: value }],
        ]),
      );

      addUtilities(utilities);
    }),
  ],
};

export default config;