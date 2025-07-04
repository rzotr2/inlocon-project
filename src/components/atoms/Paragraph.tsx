import type { FC, HTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";

const paragraph = cva("", {
    variants: {
        intent: {
            primary: ["text-primary"],
            secondary: ["text-accent"],
        },
        size: {
            sm: ["text-sm"],
            md: ["text-base"],
            lg: ["text-lg"],
            heading: ["text-heading"],
            subheading: ["text-subheading"],
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "md",
    },
});

export interface CustomParagraph
    extends HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof paragraph> {}

export const Paragraph: FC<CustomParagraph> = ({ className, intent, size, ...props }) => {
    return (
        <p
            className={paragraph({ intent, size, className })}
            {...props}
        />
    );
};
