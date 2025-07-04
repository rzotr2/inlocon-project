import type { FC, HTMLAttributes } from "react";
import { CustomButton } from "../../atoms/CustomButton.tsx";
import { useScreenWidth } from "../../../utils/screenWidthHook.ts";

export const HeroTitleButton: FC<HTMLAttributes<HTMLElement>> = () => {
    const screenWidth = useScreenWidth();

    let size: "sm" | "md" | "lg" | "xl" = "xl";
    if (screenWidth <= 640) size = "sm";
    else if (screenWidth <= 768) size = "md";
    else if (screenWidth <= 1024) size = "lg";

    return (
        <div className="absolute z-20 top-[37%] left-1/6 max-w-[80%]">
            <h1
                className="text-primary font-heading font-semibold text-[1.2rem]
                            sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] block"
            >
                Finden Sie passende Ausschreibungen und Verträge – automatisch und individuell.
            </h1>
            <div className="my-2 sm:my-4 md:my-6 lg:my-8">
                <CustomButton
                    intent="secondary"
                    size={size}
                    roundness={true}
                >
                    Jetzt starten
                </CustomButton>
            </div>
        </div>
    );
};
