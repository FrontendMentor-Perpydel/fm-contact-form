/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '250px',
      smd: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'lightGreen': 'hsl(148, 38%, 91%)',
      'mediumGreen': 'hsl(169, 82%, 27%)',
      'fmRed': 'hsl(0, 66%, 54%)',
      'white': 'hsl(0, 0%, 100%)',
      'mediumGrey': 'hsl(186, 15%, 59%)',
      'darkGrey': 'hsl(187, 24%, 22%)',
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}