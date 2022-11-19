module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["emerald", "forest"],
    darkTheme: "forest",
  },
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
};
