/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neobrutalism: {
          light: "rgb(227, 223, 242)",
          DEFAULT: "rgb(163, 136, 238)",
        }, 
        // Blue:    neobrutalism: { light: "rgb(223, 229, 242)", DEFAULT: "rgb(136, 170, 238)" },
        // Orange:  neobrutalism: { light: 'rgb(255, 244, 224)', DEFAULT: 'rgb(253, 151, 69)' },
        // Yellow:  neobrutalism: { light: 'rgb(254, 242, 232)', DEFAULT: 'rgb(255, 220, 88)' },
        // Red:     neobrutalism: { light: 'rgb(252, 215, 215)', DEFAULT: 'rgb(255, 107, 107)' },
        // Green:   neobrutalism: { light: 'rgb(224, 231, 241)', DEFAULT: 'rgb(163, 230, 54)' },
        // Purple:  neobrutalism: { light: 'rgb(227, 223, 242)', DEFAULT: 'rgb(163, 136, 238)' },
      },
    },
  },
  plugins: [],
};
