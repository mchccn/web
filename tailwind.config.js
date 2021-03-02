module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                accent: "var(--accent)",
                discord: "var(--discord)",
                light: "var(--light)",
                dark: "var(--dark)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
