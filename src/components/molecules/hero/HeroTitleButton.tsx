import type { FC, HTMLAttributes } from "react";
import { CustomButton } from "../../atoms/CustomButton.tsx";
import { useBreakpoint } from "../../../utils/breakPointHook.ts";

export const HeroTitleButton: FC<HTMLAttributes<HTMLElement>> = () => {
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
                    size={useBreakpoint()}
                    roundness={true}
                >
                    Jetzt starten
                </CustomButton>
            </div>
        </div>
    );
};
