module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        syprimaryHover: "#d3b094",
        sysecondary: "#919191",
        sytertiary: "#fffff0",
        syquaternary: "#6C6C6F",
        special: "#d3b094",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
