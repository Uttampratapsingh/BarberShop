import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        call: "0 0 0 3px #ffffff, 0 0 0 6px #2f80ff"
      }
    }
  },
  plugins: []
};

export default config;