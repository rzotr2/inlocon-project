import { type FC, type HTMLAttributes } from "react";
import { Paragraph } from "../../atoms/Paragraph.tsx";

interface OffersCardProps extends HTMLAttributes<HTMLElement> {
    title: string;
    subtitle: string;
    emoji: string;
}

export const OffersCard: FC<OffersCardProps> = ({ title, subtitle, emoji, ...props }) => {
    return (
        <div
            {...props}
            className="bg-bg-primary flex flex-col py-5 w-full text-center
                shadow-xl h-[220px] sm:max-h-[250px] justify-center lg:justify-start"
        >
            <p className="text-6xl">{emoji}</p>
            <div className="px-6 lg:px-3">
                <Paragraph
                    className="py-2 font-semibold leading-5 px-2"
                    intent="secondary"
                    size="lg"
                >
                    {title}
                </Paragraph>
                <Paragraph
                    className="pb-4"
                    intent="secondary"
                    size="sm"
                >
                    {subtitle}
                </Paragraph>
            </div>
        </div>
    );
};
