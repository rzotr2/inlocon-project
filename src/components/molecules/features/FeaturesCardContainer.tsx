import { type FC, type HTMLAttributes } from "react";
import { FeaturesCard } from "./FeaturesCard.tsx";
import appsImage from "../../../assets/images/features/apps.jpg";
import dashboard from "../../../assets/images/features/dashboard.jpg";
import laptop from "../../../assets/images/features/laptop.jpg";
import womanComputer from "../../../assets/images/features/woman-computer.jpg";
import { useTranslation } from "react-i18next";

export const FeaturesCardContainer: FC<HTMLAttributes<HTMLElement>> = () => {
    const { t } = useTranslation();

    return (
        <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
                md:gap-6 lg:gap-4 w-full cursor-default"
        >
            <FeaturesCard
                role="listitem"
                src={appsImage}
                title={t("features.cards.0.title")}
                subtitle={t("features.cards.0.subtitle")}
            />
            <FeaturesCard
                role="listitem"
                src={womanComputer}
                title={t("features.cards.1.title")}
                subtitle={t("features.cards.1.subtitle")}
            />
            <FeaturesCard
                role="listitem"
                src={laptop}
                title={t("features.cards.2.title")}
                subtitle={t("features.cards.2.subtitle")}
            />
            <FeaturesCard
                role="listitem"
                src={dashboard}
                title={t("features.cards.3.title")}
                subtitle={t("features.cards.3.subtitle")}
            />
        </div>
    );
};
