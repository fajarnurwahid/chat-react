/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                "open-sans": ["Open Sans", "sans-serif"],
            },
            animation: {
                status: "status 5s linear forwards",
            },
            keyframes: {
                status: {
                    "0%": {
                        width: "0",
                    },
                    "100%": {
                        width: "100%",
                    },
                },
            },
        },
    },
    plugins: [],
};
