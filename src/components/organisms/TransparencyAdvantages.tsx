import { type FC, type HTMLAttributes } from "react";
import womenImage from "../../assets/images/transparency/women.webp";
import { IoMdCheckmark } from "react-icons/io";
import { CustomButton } from "../atoms/CustomButton.tsx";
import { useBreakpoint } from "../../utils/breakPointHook.ts";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { nonVisibleClass, refClass, visibleClass } from "../pages/LandingPage.tsx";

export const TransparencyAdvantages: FC<HTMLAttributes<HTMLElement>> = () => {
    const breakPoint = useBreakpoint();

    const [advantagesRef, advantagesVisible] = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section className="sm:py-10">
            <div
                className={`${refClass} ${advantagesVisible ? visibleClass : nonVisibleClass}`}
                ref={advantagesRef}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch py-10">
                    <div className="flex items-stretch">
                        <div className="aspect-square w-full max-w-[480px] h-full rounded-2xl overflow-hidden mx-auto">
                            <img
                                className="w-full h-full object-cover"
                                src={womenImage}
                                alt="Advantages main image"
                            />
                        </div>
                    </div>
                    <div className="flex h-full">
                        <div className="flex flex-col justify-between h-full w-full max-w-[90%] mx-auto">
                            <h3
                                className="text-accent font-bold text-left text-[1.4rem] sm:text-[1.7rem]
                            md:text-[2rem] lg:text-[2.3rem] leading-tight mb-6"
                            >
                                Ihr Vorsprung bei neuen Ausschreibungen und Verträgen
                            </h3>
                            <ul className="flex flex-col gap-4 mb-8">
                                {[
                                    "Individuelle Projektvorschläge direkt in Ihr Dashboard",
                                    "Sofortige Benachrichtigungen zu relevanten Chancen",
                                    "Detaillierte Auswertungen für fundierte Entscheidungen",
                                ].map((text, idx) => (
                                    <li
                                        key={idx}
                                        className="flex gap-3 items-start lg:items-center"
                                    >
                                        <div className="w-7 h-7 md:w-8 md:h-8 bg-accent rounded-full flex items-center justify-center flex-none mt-1">
                                            <IoMdCheckmark className="text-primary w-5 h-5 md:w-6 md:h-6 block" />
                                        </div>
                                        <p
                                            className="text-accent opacity-80 text-[1rem] sm:text-[1.1rem]
                                                md:text-[1.15rem] lg:text-[1.2rem] leading-snug"
                                        >
                                            {text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <div className="self-center sm:self-start">
                                <CustomButton
                                    roundness={true}
                                    intent="primary"
                                    size={breakPoint}
                                >
                                    Jetzt starten
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
