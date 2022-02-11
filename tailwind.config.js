// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // fontFamily: {
            //     sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            // },
            colors: {
                'red-dark': '#d63031',
            },
        },
    },
    plugins: [],
}