module.exports = {
  content: ["./app/routes/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#C1C7C9",
        secondry: "#606B6F",
        tertiary: "#4B5556",
        quaternary: "#6C6C6F",
      },
    },
  },
  plugins: [require("tailwindcss"), require("daisyui")],
};
