/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				arsenica: ['ArsenicaTrial'],
				poppins: ['Poppins'],
			},
			colors: {
				primary: '#65AF90',
				secondary: '#C8EAEF',
				'c-white': '#FFFFFF',
				'c-black': '#1E1C1C',
				'c-green': {
					100: '#E2EBA2',
					300: '#A4CD9D',
					400: '#65AF90',
					500: '#488B3A',
				},
			},
		},
	},
};
