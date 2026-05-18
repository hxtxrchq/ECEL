/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#40121A',
					// Cambiado a gris oscuro neutro en lugar de rojo oscuro
					dark: '#1f1f23',
					accent: '#59363D',
					light: '#F2F2F2',
					neutral: '#8C7B7B',
					darkBrown: '#40121A',
					brown: '#59363D',
					taupe: '#8C7B7B',
					beige: '#F2F2F2',
				},
			},
			fontFamily: {
				sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
				display: ['Bebas Neue', 'sans-serif'],
				serif: ['Cormorant Garamond', 'serif'],
			},
			boxShadow: {
				editorial: '0 30px 80px rgba(0, 0, 0, 0.35)',
			},
			letterSpacing: {
				editorial: '0.24em',
			},
		},
	},
	plugins: [],
}
