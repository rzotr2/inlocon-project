import { type FC, type HTMLAttributes, useState } from "react";
import officeImage from "../../assets/images/questions/office.webp";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { nonVisibleClass, refClass, visibleClass } from "../pages/LandingPage.tsx";
import { Separator } from "@radix-ui/react-separator";
import { IoChevronDownOutline } from "react-icons/io5";
import { TitleAndSubtitle } from "../molecules/TitleAndSubtitle.tsx";

const questions = [
    {
        question: "Wie registriere ich mich auf der Plattform?",
        answer: "Sie können sich einfach mit Ihrer E-Mail-Adresse registrieren und erhalten sofortigen Zugang zu allen Funktionen.",
    },
    {
        question: "Wie richte ich meine Interessen und Filter ein?",
        answer: "Im Dashboard können Sie Ihre Interessen und Filter individuell anpassen, um nur relevante Ausschreibungen zu sehen.",
    },
    {
        question: "Wie erhalte ich Benachrichtigungen?",
        answer: "Sie erhalten Benachrichtigungen per E-Mail oder direkt im Dashboard, sobald neue passende Projekte verfügbar sind.",
    },
];

export const QuestionsSection: FC<HTMLAttributes<HTMLElement>> = () => {
    const [questionsRef, questionsVisible] = useFadeInOnScroll<HTMLDivElement>();
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const handleClick = (index: number) => {
        if (openIdx === null) {
            setOpenIdx(index);
        } else if (openIdx === index) {
            setOpenIdx(null);
        } else {
            setOpenIdx(null);
            setTimeout(() => {
                setOpenIdx(index);
            }, 300);
        }
    };

    return (
        <section className="pt-7 sm:pt-10 md:pt-12">
            <div
                className={`${refClass} ${questionsVisible ? visibleClass : nonVisibleClass}`}
                ref={questionsRef}
            >
                <div className="rounded-2xl overflow-hidden">
                    <img
                        src={officeImage}
                        alt="Office"
                        className="w-full h-auto object-cover"
                        aria-hidden
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 items-stretch py-5 xl:p-5">
                    <div className="flex justify-start">
                        <TitleAndSubtitle
                            center={false}
                            dark={true}
                            title="Wie kann ich starten?"
                            subtitle="Erfahren Sie, wie Sie schnell und einfach mit unserer Plattform loslegen können.
                        Hier finden Sie die wichtigsten Schritte für Ihren Einstieg."
                        />
                    </div>
                    <div>
                        <ul className="flex flex-col w-full gap-3 min-h-[280px]">
                            {questions.map((question, index) => {
                                const isOpen = openIdx === index;
                                return (
                                    <li
                                        key={question.question}
                                        className="flex flex-col gap-2"
                                    >
                                        <button
                                            className="flex justify-between gap-3 cursor-pointer w-full items-center"
                                            onClick={() => handleClick(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={`fQuestion №${index}`}
                                        >
                                            <p
                                                className="text-accent text-[1rem] sm:text-[1.1rem] font-medium
                                                    md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-start"
                                            >
                                                {question.question}
                                            </p>
                                            <div
                                                className={`w-7 h-7 md:w-8 md:h-8 bg-accent rounded-full flex items-center 
                                                    justify-center flex-none transition-transform duration-300 
                                                    ${isOpen ? "rotate-180" : ""}`}
                                            >
                                                <IoChevronDownOutline className="text-primary w-5 h-5 md:w-6 md:h-6 block" />
                                            </div>
                                        </button>
                                        <div
                                            id={`Question №${index}`}
                                            className={`transition-[max-height] duration-300 overflow-hidden
                                                ${isOpen ? "max-h-[300px] mt-2" : "max-h-0"}`}
                                            aria-hidden={!isOpen}
                                        >
                                            <div className="text-accent/80 text-[0.98rem] sm:text-[1.05rem] px-1 pb-2 opacity-80">
                                                {question.answer}
                                            </div>
                                        </div>
                                        <Separator
                                            role="separator"
                                            className="h-[1px] bg-gray-300"
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
