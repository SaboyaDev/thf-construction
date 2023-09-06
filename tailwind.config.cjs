/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        'main': '#F58634',
        'blk': '#191E25',
        'dark-gray': '#333B44',
        'gray': '#BABDC2',
        'light-gray': '#F0F1F2',
        'egg-white': '#F7F9FA',
        'white': '#FFFFFF'
      },
    }
	},
	plugins: [],
}