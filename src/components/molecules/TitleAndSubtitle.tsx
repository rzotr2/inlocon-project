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
            className={`${center ? "sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] sm:mx-auto sm:text-center" : ""}`}
        >
            <h2
                className={`${dark ? "text-accent" : "text-primary"} font-semibold text-[1.5rem] block`}
            >
                {title}
            </h2>
            <p
                className={`${dark ? "text-accent/80" : "text-primary/80"} font-heading
                    pt-3 block text-[1rem] ${center && "mx-auto"}`}
            >
                {subtitle}
            </p>
        </div>
    );
};
