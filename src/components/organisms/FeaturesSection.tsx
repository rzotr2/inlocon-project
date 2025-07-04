import { type FC, type HTMLAttributes } from "react";
import { TitleAndSubtitle } from "../molecules/TitleAndSubtitle.tsx";
import { FeaturesCardContainer } from "../molecules/features/FeaturesCardContainer.tsx";

export const FeaturesSection: FC<HTMLAttributes<HTMLElement>> = () => {
    return (
        <section
            className="pb-5"
            aria-labelledby="features-heading"
        >
            <div className="pt-5 sm:pt-10 md:pt-15 lg:pt-20 pb-10 w-full">
                <TitleAndSubtitle
                    id="features-heading"
                    title="Effizient zu neuen Aufträgen und Geschäftschancen"
                    subtitle="Mit Incolon automatisieren Sie die Suche nach relevanten Ausschreibungen und
                        Verträgen. Nutzen Sie intelligente Filter, detaillierte Analysen und bleiben Sie
                        immer einen Schritt voraus – alles auf einer Plattform."
                />
            </div>
            <FeaturesCardContainer />
        </section>
    );
};
