import type { FC, HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva("focus:outline-none bg-primary rounded-sm", {
    variants: {
        size: {
            sm: ["text-sm", "py-1.5", "px-3"],
            md: ["text-base", "py-1.5", "px-4"],
            lg: ["text-lg", "py-1.5", "px-7"],
        },
    },
});

export interface InputProps extends HTMLAttributes<HTMLInputElement>, VariantProps<typeof input> {}

export const Input: FC<InputProps> = ({ className, size, ...props }): ReactNode => {
    return (
        <>
            <input
                type="email"
                className={input({ size, className })}
                placeholder="E-Mail-Adresse eingeben"
                {...props}
            />
        </>
    );
};
