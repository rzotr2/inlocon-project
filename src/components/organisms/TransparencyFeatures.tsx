import { type FC, type HTMLAttributes } from "react";
import consultImage from "../../assets/images/transparency/consult.webp";
import { FiFeather } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { nonVisibleClass, refClass, visibleClass } from "../pages/LandingPage.tsx";

const features = [
    {
        icon: <FiFeather className="text-accent w-5 h-5 md:w-6 md:h-6 block" />,
        text: "Interaktive Statistiken",
    },
    {
        icon: <IoEyeOutline className="text-accent w-5 h-5 md:w-6 md:h-6 block" />,
        text: "Individuelle Auswertungen",
    },
    {
        icon: <GoSun className="text-accent w-5 h-5 md:w-6 md:h-6 block" />,
        text: "Historie und Status Ihrer Bewerbungen",
    },
];

export const TransparencyFeatures: FC<HTMLAttributes<HTMLElement>> = () => {
    const [featuresRef, featuresVisible] = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section className="sm:py-10">
            <div
                className={`${refClass} ${featuresVisible ? visibleClass : nonVisibleClass}`}
                ref={featuresRef}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch py-10">
                    <div className="flex h-full order-2 sm:order-1">
                        <div className="flex flex-col justify-center h-full w-full max-w-[90%] mx-auto">
                            <h3
                                className="
                            text-primary font-bold text-left
                            text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.3rem]
                            leading-tight mb-6
                        "
                            >
                                Transparenz und Kontrolle über Ihre Ausschreibungen
                            </h3>
                            <ul className="flex flex-col gap-4 mb-8">
                                {features.map(({ icon, text }, idx) => (
                                    <li key={idx}>
                                        <div className="flex gap-3 p-3 shadow-lg backdrop-blur-2xl w-full rounded-md items-center bg-bg-primary">
                                            {icon}
                                            <p className="text-accent opacity-80 text-[1rem] sm:text-[1.1rem] md:text-[1.15rem] lg:text-[1.2rem] leading-snug">
                                                {text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-stretch order-1 sm:order-2">
                        <div className="aspect-square w-full max-w-[480px] h-full rounded-2xl overflow-hidden mx-auto">
                            <img
                                className="w-full h-full object-cover"
                                src={consultImage}
                                alt="Features main image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
