module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-1": "#0f172a",
      },
      backgroundImage: {
        "radial-pattern":
          "radial-gradient(ellipse at center, rgba(255,255,255,0.03), transparent 40%)",
      },
    },
  },
  plugins: [],
};
