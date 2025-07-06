/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            fontSize: {
                heading: "2rem",
                subheading: "1.5rem",
            },
            colors: {
                bgPrimary: "#F9FAFB",
                primary: "#F9FAFB",
                primaryHover: "#F3F4F6",
                secondary: "#6BDBA0",
                secondaryHover: "#56b87f",
                accent: "#0A2640",
                accentHover: "#143d63",
            },
            fontFamily: {
                heading: ["Manrope", "sans-serif"],
                mainText: ["Open Sans", "sans-serif"],
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease",
                ticker: "ticker 30s linear infinite",
                "ticker-half": "ticker-half 10s linear infinite",
                "slide-in": "slide-in 0.4s cubic-bezier(.16,1,.3,1)",
                "slide-out": "slide-out 0.3s cubic-bezier(.16,1,.3,1)",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "translateY(10px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                ticker: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                "ticker-half": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "slide-in": {
                    "0%": { opacity: "0", transform: "translateX(100%)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "slide-out": {
                    "0%": { opacity: "1", transform: "translateX(0)" },
                    "100%": { opacity: "0", transform: "translateX(100%)" },
                },
            },
        },
    },
};

export default tailwindConfig;
