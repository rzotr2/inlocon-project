import { type FC, type HTMLAttributes } from "react";
import { TitleAndSubtitle } from "../molecules/TitleAndSubtitle.tsx";
import dbLogo from "../../assets/svg/db-logo.svg";
import schindlerLogo from "../../assets/svg/Schindlerlogo.svg";
import siemensLogo from "../../assets/svg/Siemens-logo.svg";
import knaufLogo from "../../assets/svg/Knauf.svg";
import strabagLogo from "../../assets/svg/Strabag_SE_Logo_2008.svg";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { nonVisibleClass, refClass, visibleClass } from "../pages/LandingPage.tsx";

const partners = [
    {
        name: "Knauf",
        logo: knaufLogo,
        url: "https://www.knauf.de/",
    },
    {
        name: "Schindler",
        logo: schindlerLogo,
        url: "https://www.schindler.com/",
    },
    {
        name: "Siemens",
        logo: siemensLogo,
        url: "https://www.siemens.com/",
    },
    {
        name: "DB",
        logo: dbLogo,
        url: "https://www.deutschebahn.com/",
    },
    {
        name: "Strabag",
        logo: strabagLogo,
        url: "https://www.strabag.com/",
    },
];

export const PartnersSection: FC<HTMLAttributes<HTMLElement>> = () => {
    const [partnersRef, partnersVisible] = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section className="py-10 sm:py-15 md:py-20">
            <div className="pb-7">
                <TitleAndSubtitle
                    dark={true}
                    title="Unsere Partner"
                    subtitle="Gemeinsam mit starken Partnern schaffen wir Mehrwert und neue Möglichkeiten für unsere Kunden."
                />
            </div>
            <div
                className={`${refClass} ${partnersVisible ? visibleClass : nonVisibleClass}`}
                ref={partnersRef}
            >
                <div
                    className="w-full flex justify-between items-center
                    gap-4 sm:gap-8 md:gap-12 lg:gap-16transition-opacity duration-700"
                >
                    {partners.map(({ name, logo, url }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name} Website`}
                            className="flex items-center justify-center w-full
                            max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]
                            transition-all duration-300 hover:scale-105 hover:drop-shadow-lg group"
                        >
                            <img
                                src={logo}
                                alt={`${name} logo`}
                                className="w-full h-auto filter grayscale group-hover:grayscale-0
                                    transition-all duration-300 object-contain"
                                draggable={false}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
