import type { FC, HTMLAttributes } from "react";
import { CustomButton } from "../../atoms/CustomButton.tsx";
import { useBreakpoint } from "../../../utils/breakPointHook.ts";
import { useTranslation } from "react-i18next";

export const HeroTitleButton: FC<HTMLAttributes<HTMLElement>> = () => {
    const { t } = useTranslation();

    return (
        <div className="absolute z-20 top-[45%] left-[10%] sm:left-1/6 max-w-[80%]">
            <h1
                className="text-primary font-heading font-semibold
                    text-[clamp(1.2rem,4vw,3rem)] block"
            >
                {t("hero.title")}
            </h1>
            <div className="my-2 sm:my-4 md:my-6 lg:my-8">
                <CustomButton
                    intent="secondary"
                    size={useBreakpoint()}
                    roundness={true}
                >
                    {t("hero.start")}
                </CustomButton>
            </div>
        </div>
    );
};
