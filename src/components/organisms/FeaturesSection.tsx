import { type FC, type HTMLAttributes } from "react";
import { TitleAndSubtitle } from "../molecules/TitleAndSubtitle.tsx";
import { FeaturesCardContainer } from "../molecules/features/FeaturesCardContainer.tsx";
import { useTranslation } from "react-i18next";

export const FeaturesSection: FC<HTMLAttributes<HTMLElement>> = () => {
    const { t } = useTranslation();

    return (
        <section
            className="pb-5"
            aria-labelledby="features-heading"
        >
            <div className="pt-5 sm:pt-10 md:pt-15 lg:pt-20 pb-10 w-full">
                <TitleAndSubtitle
                    id="features-heading"
                    title={t("features.title")}
                    subtitle={t("features.subtitle")}
                />
            </div>
            <FeaturesCardContainer />
        </section>
    );
};
