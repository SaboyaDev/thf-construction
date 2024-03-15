/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			black: '#20262E',
			white: '#FFFFFF',
		},
		extend: {
			colors: {
				main: '#F58634',
				'my-black': '#20262E',
				'dark-metallic': '#333B44',
				metallic: '#5F6773',
				'wolf-gray': '#757980',
				gray: '#929CA6',
				'light-gray': '#F0F1F2',
				'egg-white': '#F7F9FA',
			},
		},
	},
	plugins: [],
}
