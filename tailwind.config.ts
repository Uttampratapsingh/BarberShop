import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        call: "0 0 0 3px #FDFBD4, 0 0 0 6px #C05800"
      }
    }
  },
  plugins: []
};

export default config;