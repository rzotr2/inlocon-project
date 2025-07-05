import { type FC, type HTMLAttributes } from "react";
import heroImage from "../../assets/images/hero-image.webp";
import heroImageSecond from "../../assets/images/hero-image-2.webp";
import heroImageThird from "../../assets/images/hero-image-3.webp";
import { EmblaCarousel } from "../molecules/EmblaCarousel.tsx";
import { HeroTitleButton } from "../molecules/hero/HeroTitleButton.tsx";
import { useTranslation } from "react-i18next";

export const HeroSection: FC<HTMLAttributes<HTMLElement>> = () => {
    const { t } = useTranslation();

    return (
        <section
            className="-mt-16 sm:-mt-16 md:-mt-18 min-h-full w-full min-w-full relative
                    aspect-[16/12] sm:aspect-[16/11] md:aspect-[16/10] lg:aspect-[16/9]"
        >
            <EmblaCarousel fullWidth={true}>
                <img
                    aria-hidden
                    className="w-full aspect-[16/12] sm:aspect-[16/11] md:aspect-[16/10] lg:aspect-[16/9] object-cover"
                    src={heroImage}
                    alt={t("hero.carousel_alt")}
                />
                <img
                    aria-hidden
                    className="w-full aspect-[16/12] sm:aspect-[16/11] md:aspect-[16/10] lg:aspect-[16/9] object-cover"
                    src={heroImageSecond}
                    alt={t("hero.carousel_alt")}
                />
                <img
                    aria-hidden
                    className="w-full aspect-[16/12] sm:aspect-[16/11] md:aspect-[16/10] lg:aspect-[16/9] object-cover"
                    src={heroImageThird}
                    alt={t("hero.carousel_alt")}
                />
            </EmblaCarousel>
            <div
                className="absolute inset-0 bg-black/40 pointer-events-none z-10"
                aria-hidden
            />
            <HeroTitleButton />
        </section>
    );
};
