/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./src/pages/**/*.{js,ts,jsx,tsx}", // change this
		"./src/components/**/*.{js,ts,jsx,tsx}", // change this
		"./src/layouts/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				theme: "#014488",
				themeSecondary: "",
				themeGray: "",
				facebook: "#3b5999",
				twitter: "#55acee",
				linkedin: "#0077b5",
				instagram: "#e4405f",
				whatsapp: "#25d366",
				youtube: "#cd201f",
				primary: "#5E4EC2",
				"primary-dark": "#1800B2",
				"primary-blue": "#0D70AE",
				"secondary-blue": "#094cec",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
	darkMode: "class", // change this
};
