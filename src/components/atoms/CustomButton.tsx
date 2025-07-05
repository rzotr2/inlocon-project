import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

const button = cva("cursor-pointer", {
    variants: {
        intent: {
            primary: ["bg-accent", "text-primary"],
            secondary: ["bg-secondary", "text-accent"],
            white: ["bg-primary", "text-accent"],
        },
        size: {
            sm: ["text-sm", "py-2", "px-5"],
            md: ["text-base", "py-2.5", "px-7"],
            lg: ["text-lg", "py-2.5", "px-9"],
            xl: ["text-xl", "py-2", "px-9"],
        },
        roundness: {
            false: null,
            true: ["rounded-3xl"],
        },
    },
    compoundVariants: [
        {
            intent: "primary",
            class: "hover:bg-accent-hover",
        },
        {
            intent: "secondary",
            class: "hover:bg-secondary-hover hover:text-primary",
        },
        {
            intent: "white",
            class: "hover:bg-primary-hover hover:text-accent-hover",
        },
    ],
});

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof button> {}

export const CustomButton: FC<ButtonProps> = ({
    className,
    intent,
    size,
    roundness,
    ...props
}: ButtonProps): ReactNode => {
    return (
        <>
            <button
                className={button({ intent, size, roundness, className })}
                {...props}
            />
        </>
    );
};
