import { type FC, type HTMLAttributes } from "react";
import { FeaturesCard } from "./FeaturesCard.tsx";
import appsImage from "../../../assets/images/features/apps.jpg";
import dashboard from "../../../assets/images/features/dashboard.jpg";
import laptop from "../../../assets/images/features/laptop.jpg";
import womanComputer from "../../../assets/images/features/woman-computer.jpg";

export const FeaturesCardContainer: FC<HTMLAttributes<HTMLElement>> = () => {
    return (
        <div
            role="list"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
                md:gap-6 lg:gap-4 w-full cursor-default"
        >
            <FeaturesCard
                role="listitem"
                src={appsImage}
                title="Automatische Benachrichtigungen"
                subtitle="Erhalten Sie sofort Updates zu neuen, für Sie relevanten Projekten."
            />
            <FeaturesCard
                role="listitem"
                src={womanComputer}
                title="Individuelle Filter & Einstellungen"
                subtitle="Sehen Sie nur die Angebote, die wirklich zu Ihnen passen."
            />
            <FeaturesCard
                role="listitem"
                src={laptop}
                title="Analysen & Ergebnisse"
                subtitle="Profitieren Sie von umfassenden Einblicken, Contract Awards und Submission Results."
            />
            <FeaturesCard
                role="listitem"
                src={dashboard}
                title="Persönliches Dashboard"
                subtitle="Verwalten Sie Ihre Favoriten, Benachrichtigungen und Einstellungen zentral und übersichtlich."
            />
        </div>
    );
};
