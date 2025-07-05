import type { FC } from "react";
import { Paragraph } from "../../atoms/Paragraph.tsx";
import { FaArrowRight } from "react-icons/fa";

interface FeedbackCardProps {
    intent: "primary" | "secondary";
    src: string;
    text: string;
    buttonText: string;
}

export const FeedbackCard: FC<FeedbackCardProps> = ({ intent, src, text, buttonText }) => {
    return (
        <div
            className={`h-[200px] flex items-center px-10 md:px-5 lg:px-10 justify-between 
                ${intent === "primary" ? "bg-accent" : "bg-gray-200"}`}
        >
            <div className="space-y-5">
                <Paragraph
                    intent={intent}
                    size="lg"
                >
                    {text}
                </Paragraph>
                <button
                    className={`border-b flex items-center gap-2 opacity-90
                        ${
                            intent === "primary"
                                ? "border-primary text-primary cursor-pointer hover:bg-accent-hover"
                                : "border-accent text-accent cursor-pointer hover:bg-primary-hover"
                        }`}
                >
                    <FaArrowRight />
                    {buttonText}
                </button>
            </div>
            <img
                className="max-w-20"
                src={src}
                alt={text}
                aria-hidden
            />
        </div>
    );
};
