module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // important for Tailwind v2
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      serif: ['Cormorant Garamond', 'serif'],
    },
      colors: {
        mainBg: "#f5f2ec",
        lightBg: "#e8ded3",
        button: "#a67a5b",
        text: "#241c17",
      },
      animation: {
      ring: 'fillRing 3s linear forwards',
    },
    keyframes: {
      fillRing: {
        to: { strokeDashoffset: '0' },
      },
    },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}