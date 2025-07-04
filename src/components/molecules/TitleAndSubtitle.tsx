import type { FC, HTMLAttributes } from "react";

interface TitleAndSubtitleProps extends HTMLAttributes<HTMLElement> {
    title: string;
    subtitle: string;
    dark?: boolean;
    center?: boolean;
}

export const TitleAndSubtitle: FC<TitleAndSubtitleProps> = ({
    title,
    subtitle,
    dark = true,
    center = true,
}: TitleAndSubtitleProps) => {
    return (
        <div
            className={`${center ? "mx-auto text-center sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%]" : ""}`}
        >
            <h2
                className={`${dark ? "text-accent" : "text-primary"} font-heading font-semibold text-[1.1rem] mb-2
                            sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] block`}
            >
                {title}
            </h2>
            <p
                className={`${dark ? "text-accent/80" : "text-primary/80"} font-heading text-[0.9rem] max-w-[90%] ${center && "mx-auto"}
                            sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] block`}
            >
                {subtitle}
            </p>
        </div>
    );
};
