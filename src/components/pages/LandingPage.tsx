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

export const visibleClass = "opacity-100 translate-y-0";
export const nonVisibleClass = "opacity-0 translate-y-12 pointer-events-none";
export const refClass = "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]";

export const LandingPage: FC = () => {
    const [transparent, setTransparent] = useState<boolean>(true);
    const [menuOpened, setMenuOpened] = useState<boolean>(false);
    const heroRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const heroMiddle = rect.top + rect.height / 4;
            setTransparent(heroMiddle > 0);
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

    const openMenu = () => {
        setMenuOpened(!menuOpened);
    };

    return (
        <main>
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
            <div ref={heroRef}>
                <HeroSection />
            </div>
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px]">
                <FeaturesSection />
                <BranchesSection />
            </div>
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px] bg-accent">
                <OfferSection />
            </div>
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px]">
                <TransparencyAdvantages />
            </div>
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px] bg-accent">
                <TransparencyFeatures />
            </div>
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-[60px] lg:px-[100px] xl:px-[120px]">
                <PartnersSection />
                <QuestionsSection />
                <EmailSection />
            </div>
            {<Menu menuOpened={menuOpened} />}
        </main>
    );
};
