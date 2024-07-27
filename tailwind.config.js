/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                "open-sans": ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
