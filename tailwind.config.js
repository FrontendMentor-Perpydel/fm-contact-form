/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        default: {
          primary: 'hsl(0, 0%, 100%)',
          secondary: 'hsl(169, 82%, 27%)',
          accent: 'hsl(186, 15%, 59%)',
          neutral: 'hsl(187, 24%, 22%)',
          error: 'hsl(0, 66%, 54%)',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
    ],
  },
  theme: {
    screens: {
      sm: '250px',
      smd: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [daisyui],
};
