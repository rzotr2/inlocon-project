import type { FC, HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import logoLight from "../../assets/svg/logo/inloconLogoLight.svg";
import logoDark from "../../assets/svg/logo/inloconLogoDark.svg";

const logo = cva("", {
    variants: {
        intent: {
            light: [],
            dark: [],
        },
        size: {
            sm: ["w-16 h-8"],
            md: ["w-32 h-12"],
            lg: ["w-48 h-12"],
        },
    },
    defaultVariants: {
        intent: "dark",
        size: "lg",
    },
});

export interface LogoProps extends HTMLAttributes<HTMLImageElement>, VariantProps<typeof logo> {}

export const Logo: FC<LogoProps> = ({ className, intent, size, ...props }): ReactNode => {
    return (
        <img
            src={intent === "light" ? logoLight : logoDark}
            alt="Inlocon logo"
            className={logo({ intent, size, className })}
            {...props}
        />
    );
};
