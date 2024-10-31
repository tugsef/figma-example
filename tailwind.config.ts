import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          dark: 'var(--dark)',
          green: 'var(--green)',
          gray: 'var(--gray)'
      },
    },
  },
  plugins: [],
};
export default config;
