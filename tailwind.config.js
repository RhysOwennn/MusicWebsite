module.exports = {
  content: ["./app/routes/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#C1C7C9",
        primaryHover: "#BCC2C4",
        secondry: "#606B6F",
        tertiary: "#4B5556",
        quaternary: "#6C6C6F",
      },

      backgroundImage: {
        hero: "url('../SybersynWebsite/public/images/hero.jpg')",
        hero2:
          "url('../SybersynWebsite/public/images/Sybersyn YouTube Res.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
