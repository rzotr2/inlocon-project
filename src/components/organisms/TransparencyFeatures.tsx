import { type FC, type HTMLAttributes } from "react";
import consultImage from "../../assets/images/transparency/consult.webp";
import { FiFeather } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { nonVisibleClass, refClass, visibleClass } from "../pages/LandingPage.tsx";
import { t } from "i18next";

export const TransparencyFeatures: FC<HTMLAttributes<HTMLElement>> = () => {
    const [featuresRef, featuresVisible] = useFadeInOnScroll<HTMLDivElement>();

    const features = [
        {
            icon: <FiFeather className="text-accent w-5 h-5 md:w-6 md:h-6 block" />,
            text: t("transparencyF.features.0"),
        },
        {
            icon: <IoEyeOutline className="text-accent w-5 h-5 md:w-6 md:h-6 block" />,
            text: t("transparencyF.features.1"),
        },
        {
            icon: <GoSun className="text-accent w-5 h-5 md:w-6 md:h-6 block" />,
            text: t("transparencyF.features.2"),
        },
    ];

    return (
        <section className="py-7 sm:py-10 md:py-12">
            <div
                className={`${refClass} ${featuresVisible ? visibleClass : nonVisibleClass}`}
                ref={featuresRef}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 items-center">
                    <div className="flex order-2 sm:order-1 items-center">
                        <div className="flex flex-col justify-center w-full px-2">
                            <h3
                                className="text-primary font-bold text-left text-[1.4rem]
                                sm:text-[1.7rem] md:text-[2rem] lg:text-[2.3rem] leading-tight mb-6"
                            >
                                {t("transparencyF.title")}
                            </h3>
                            <ul className="flex flex-col gap-5">
                                {features.map(({ icon, text }, idx) => (
                                    <li
                                        key={idx}
                                        className="shadow-md shadow-primary rounded-md overflow-hidden cursor-default"
                                    >
                                        <div className="flex gap-3 py-2 px-4 shadow-lg backdrop-blur-2xl w-full items-center bg-bg-primary">
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
                    <div className="flex order-1 sm:order-2">
                        <div className="aspect-square w-full max-w-[480px] rounded-2xl overflow-hidden mx-auto">
                            <img
                                className="w-full object-cover rounded-2xl"
                                src={consultImage}
                                alt="Advantages main image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
