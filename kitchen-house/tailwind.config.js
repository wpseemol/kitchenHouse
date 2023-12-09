import tailwindcssAnimated from 'tailwindcss-animated';
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryColor: '#c59d5f',
            },
            fontFamily: {
                myPoppinsFont: ['Poppins', 'sans-serif'],
                iconFont: ['Agbalumo', 'sans-serif'],
            },
        },
    },
    plugins: [tailwindcssAnimated],
};
