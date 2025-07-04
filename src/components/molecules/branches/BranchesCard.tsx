import { BsChevronDoubleRight } from "react-icons/bs";
import { useState } from "react";

interface BranchCardProps {
    src: string;
    alt: string;
    title: string;
    text: string[];
}

export const BranchesCard = ({ src, alt, title, text }: BranchCardProps) => {
    const [cardOpened, setCardOpened] = useState(false);

    const toggleOpen = () => setCardOpened(!cardOpened);

    return (
        <div
            className="shadow-sm overflow-hidden group bg-white transition-all duration-300 h-full"
            role="listitem"
            onClick={toggleOpen}
        >
            <div className="relative w-full h-full">
                <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={src}
                    alt={alt}
                    loading="lazy"
                />
                <div
                    className={`absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors 
                        duration-300 ${cardOpened ? "bg-black/60" : ""} pointer-events-none z-10`}
                    aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center w-full">
                    <div className="w-full px-4 pt-8 pb-3">
                        <h3 className="text-white text-lg md:text-xl font-semibold text-center drop-shadow">
                            {title}
                        </h3>
                    </div>
                    <ul
                        className={`w-full px-2 pb-4 max-h-0 opacity-0
                            ${cardOpened ? "opacity-100 max-h-60" : ""}
                            group-hover:opacity-100 group-hover:max-h-60
                            transition-all duration-500 ease-in-out flex flex-col gap-2`}
                    >
                        {text.map((string, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-2 text-white text-sm md:text-base"
                            >
                                <BsChevronDoubleRight
                                    className="mt-1 shrink-0 text-base md:text-lg"
                                    aria-hidden="true"
                                />
                                <span>{string}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
