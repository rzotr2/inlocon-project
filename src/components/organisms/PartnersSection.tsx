import type { FC, HTMLAttributes } from "react";
import dbLogo from "../../assets/svg/companies/db-logo.svg";
import schindlerLogo from "../../assets/svg/companies/Schindlerlogo.svg";
import siemensLogo from "../../assets/svg/companies/Siemens-logo.svg";
import knaufLogo from "../../assets/svg/companies/Knauf.svg";
import strabagLogo from "../../assets/svg/companies/Strabag_SE_Logo_2008.svg";
import { TitleAndSubtitle } from "../molecules/TitleAndSubtitle.tsx";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { t } from "i18next";

const partners = [
    { name: "Knauf", logo: knaufLogo, url: "https://www.knauf.de/" },
    { name: "Schindler", logo: schindlerLogo, url: "https://www.schindler.com/" },
    { name: "Siemens", logo: siemensLogo, url: "https://www.siemens.com/" },
    { name: "DB", logo: dbLogo, url: "https://www.deutschebahn.com/" },
    { name: "Strabag", logo: strabagLogo, url: "https://www.strabag.com/" },
];

export const PartnersSection: FC<HTMLAttributes<HTMLElement>> = () => {
    const [partnersRef, partnersVisible] = useFadeInOnScroll<HTMLDivElement>(1);

    return (
        <section className="pt-7 sm:pt-10 md:pt-12">
            <div className="pb-7">
                <TitleAndSubtitle
                    dark={true}
                    title={t("partners.title")}
                    subtitle={t("partners.subtitle")}
                />
            </div>
            {/* lg+ */}
            <div
                className={`w-full justify-between items-center hidden md:flex
                    gap-4 sm:gap-8 md:gap-12 lg:gap-16 transition-all duration-2000 object-contain
                    ${partnersVisible ? "grayscale-0" : "filter grayscale"}`}
                ref={partnersRef}
            >
                {partners.map(({ name, logo, url }) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        aria-label={`Gehen zur ${name} Webseite`}
                        className="flex items-center justify-center w-full
                            max-w-[70px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]
                            transition-all duration-300 hover:scale-105 hover:drop-shadow-lg group"
                    >
                        <img
                            src={logo}
                            alt={`${name} company logotype`}
                            className="w-full h-auto transition-all duration-300 object-contain"
                        />
                    </a>
                ))}
            </div>
            {/* before md (md included) */}
            <div className="block md:hidden w-full overflow-hidden h-16 relative">
                <div className="flex w-max animate-ticker-half">
                    {[...partners, ...partners].map(({ name, logo, url }, index) => (
                        <a
                            key={index}
                            href={url}
                            target="_blank"
                            className="flex items-center px-8"
                            aria-label={t("partners.ariaLabel", { name })}
                        >
                            <img
                                src={logo}
                                alt={t("partners.alt", { name })}
                                className="h-10 w-auto object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
