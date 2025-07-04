import { type FC, type HTMLAttributes } from "react";
import { Paragraph } from "../../atoms/Paragraph.tsx";

interface CardProps {
    src: string;
    title: string;
    subtitle: string;
}

export const FeaturesCard: FC<CardProps & HTMLAttributes<HTMLDivElement>> = ({
    src,
    title,
    subtitle,
}: CardProps) => {
    return (
        <div
            className="shadow-sm rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300 group"
        >
            <div className="h-auto">
                <div className="relative overflow-hidden">
                    <img
                        className="group-hover:scale-110 transition-transform duration-300 w-full"
                        src={src}
                        alt={title}
                    />
                    <div
                        className="absolute inset-0 bg-black/30 pointer-events-none z-10"
                        aria-hidden
                    />
                </div>
                <div className="px-3 text-center">
                    <Paragraph
                        className="py-2 font-semibold"
                        intent="secondary"
                        size="lg"
                        role="heading"
                        aria-level={3}
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
        </div>
    );
};
