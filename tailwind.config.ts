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
        fontColor: "var(--color-font-color)",
				fontHover: "var(--color-font-color-hover)",
				bgColor: "var(--color-background-color)",
				bgHover: "var(--color-background-color-hover)",
				borderColor: "var(--color-border-color)",
      },
      fontFamily: {
        pavelt: ['Pavelt', 'san-serif']
      }
    },
    screens: {
  		sm: '600px',
  		md: '750px',
  		lg: '960px',
  		xl: '1100px'
  	}
  },
  plugins: [],
};
export default config;
