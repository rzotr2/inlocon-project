import { type FC, useEffect, useRef, useState } from "react";
import { HeroSection } from "../organisms/HeroSection.tsx";
import { FeaturesSection } from "../organisms/FeaturesSection.tsx";
import { BranchesSection } from "../organisms/BranchesSection.tsx";
import { OfferSection } from "../organisms/OfferSection.tsx";
import { PartnersSection } from "../organisms/PartnersSection.tsx";
import { QuestionsSection } from "../organisms/QuestionsSection.tsx";
import { TransparencyAdvantages } from "../organisms/TransparencyAdvantages.tsx";
import { TransparencyFeatures } from "../organisms/TransparencyFeatures.tsx";
import { Header } from "../organisms/Header.tsx";
import { Menu } from "../organisms/Menu.tsx";
import { EmailSection } from "../organisms/EmailSection.tsx";
import { Footer } from "../organisms/Footer.tsx";
import { FeedbackSection } from "../organisms/FeedbackSection.tsx";

export const visibleClass = "opacity-100 translate-y-0";
export const nonVisibleClass = "opacity-0 translate-y-12 pointer-events-none";
export const refClass = "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]";

export const LandingPage: FC = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const heroRef = useRef<HTMLDivElement | null>(null);
    const [transparent, setTransparent] = useState(true);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) {
                setTransparent(true);
            } else {
                const rect = heroRef.current.getBoundingClientRect();
                const heroQuarter = rect.top + rect.height / 4;
                setTransparent(heroQuarter > 0);
            }
            setVisible(window.scrollY > window.innerHeight);
        };

        setTimeout(handleScroll, 0);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpened]);

    const openMenu = () => setMenuOpened(!menuOpened);

    return (
        <main>
            <a
                href="#hero"
                aria-label="Back to top"
                className={`fixed z-50 bottom-5 right-5 h-10 w-10 bg-secondary text-accent flex items-center
                    justify-center rounded-full shadow-lg hover:bg-secondary-hover transition-opacity duration-300
                    ${visible && !menuOpened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                ↑
            </a>
            <div
                role="rowheader"
                className="sticky top-0 z-50"
                aria-label="Hauptnavigation"
            >
                <Header
                    transparent={transparent && !menuOpened}
                    openMenu={openMenu}
                />
            </div>
            {<Menu menuOpened={menuOpened} />}
            <div
                ref={heroRef}
                id="hero"
            >
                <HeroSection />
            </div>
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px] bg-bg-primary">
                <FeaturesSection />
                <BranchesSection />
            </div>
            <div className="bg-accent">
                <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px]">
                    <OfferSection />
                </div>
            </div>
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px] bg-bg-primary">
                <TransparencyAdvantages />
            </div>
            <div className="bg-accent">
                <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px]">
                    <TransparencyFeatures />
                </div>
            </div>
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px] bg-bg-primary">
                <PartnersSection />
                <FeedbackSection />
                <QuestionsSection />
            </div>
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px] mb-8 sm:mb-12 md:mb-15 bg-bg-primary">
                <EmailSection />
            </div>
            <div className="bg-accent">
                <div className="w-full max-w-[1920px] mx-auto px-5 md:px-[60px] lg:px-[100px] xl:px-[120px]">
                    <Footer />
                </div>
            </div>
        </main>
    );
};
