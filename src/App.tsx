import { LandingPage } from "./components/pages/LandingPage.tsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const currentLanguage = localStorage.getItem("currentLanguage");

        if (currentLanguage) {
            i18n.changeLanguage(currentLanguage);
        }
    }, []);

    return (
        <>
            <LandingPage />
        </>
    );
}

export default App;
