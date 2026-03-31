/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          oscuro: '#1a3a2a',
          medio: '#2d6a4f',
          claro: '#52b788',
          suave: '#b7e4c7',
        },
        crema: { DEFAULT: '#f5f0e8', oscuro: '#e8ddc8' },
        dorado: { DEFAULT: '#c9a84c', claro: '#e8c97a' },
        tierra: '#6b4226',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica Neue', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
