import type {Config} from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sanity/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "475px",
			},
			colors: {
				primary: {
					"100": "#FFE8F0",
					DEFAULT: "#393b42",
				},
				secondary: "#FBE843",
				black: {
					"100": "#333333",
					"200": "#141413",
					"300": "#7D8087",
					DEFAULT: "#000000",
				},
				white: {
					"100": "#F7F7F7",
					DEFAULT: "#FFFFFF",
				},
				blue: {
					"50": "#DFDFF0",
					"75": "#DFDFF2",
					"100": "#F0F2FA",
					"200": "#010101",
					"300": "#4FB7DD",
				}, 
				violet: {
					300: '#5724FF'
				},
				yellow: {
					100: "#8E983F",
					300: "#EDFF66"
				},
				p1: '#2EF2FF',
				p2: '#3C52D9',
				p3: '#C8EA80',
				p4: '#EAEDFF',
				p5: '#C4CBF5',
				s1: '#080D27',
				s2: '#0C1838',
				s3: '#334679',
				s4: '#1959AD',
				s5: '#263466',
			},
			fontFamily: {
				"work-sans": ["var(--font-work-sans)"],
				zentry: ['zentry', 'sanf-serif'],
				general: ['general', 'sanf-serif'],
				'circular-web': ['circular-web', 'sanf-serif'],
				'robert-medium': ['robert-medium', 'sanf-serif'],
				'robert-regular': ['robert-regular', 'sanf-serif'],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			boxShadow: {
				100: "2px 2px 0px 0px rgb(0, 0, 0)",
				200: "2px 2px 0px 2px rgb(0, 0, 0)",
				300: "2px 2px 0px 2px rgb(238, 43, 105)",
			    'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
  			    'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
  			    'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)'
			},
		},
	},
};

export default config;