import { type FC, type HTMLAttributes } from "react";
import heroImage from "../../assets/images/hero-image.webp";
import heroImageSecond from "../../assets/images/hero-image-2.webp";
import heroImageThird from "../../assets/images/hero-image-3.webp";
import { EmblaCarousel } from "../molecules/EmblaCarousel.tsx";
import { HeroTitleButton } from "../molecules/hero/HeroTitleButton.tsx";

export const HeroSection: FC<HTMLAttributes<HTMLElement>> = () => {
    return (
        <section className="-mt-16 sm:-mt-16 md:-mt-18">
            <div className="relative">
                <EmblaCarousel fullWidth={true}>
                    <img
                        aria-hidden
                        className="w-full h-full"
                        src={heroImage}
                        alt="main image for Hero Section"
                        loading="eager"
                    />
                    <img
                        aria-hidden
                        className="w-full h-full"
                        src={heroImageSecond}
                        alt="main image for Hero Section"
                        loading="eager"
                    />
                    <img
                        aria-hidden
                        className="w-full h-full"
                        src={heroImageThird}
                        alt="main image for Hero Section"
                        loading="eager"
                    />
                </EmblaCarousel>
                <div
                    className="absolute inset-0 bg-black/40 pointer-events-none z-10"
                    aria-hidden
                />
                <HeroTitleButton />
            </div>
        </section>
    );
};
