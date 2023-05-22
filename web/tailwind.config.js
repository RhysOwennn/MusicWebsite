module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C1C7C9",
        primaryHover: "#BCC2C4",
        secondry: "#606B6F",
        tertiary: "#4B5556",
        quaternary: "#6C6C6F",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
