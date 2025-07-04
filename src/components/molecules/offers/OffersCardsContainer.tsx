import { type FC, type HTMLAttributes } from "react";
import { OffersCard } from "./OffersCard.tsx";
import { EmblaCarousel } from "../EmblaCarousel.tsx";

export const OffersCardsContainer: FC<HTMLAttributes<HTMLElement>> = () => {
    return (
        <>
            <div
                className="block sm:hidden rounded-xl overflow-hidden h-full"
                role="list"
            >
                <EmblaCarousel
                    fade={false}
                    autoplay={true}
                >
                    <OffersCard
                        role="listitem"
                        aria-hidden
                        emoji="🎯"
                        title="Individuelle Auftragschancen"
                        subtitle="Finden Sie neue Chancen und erhalten Sie passende Angebote für Ihr Unternehmen"
                    />
                    <OffersCard
                        role="listitem"
                        aria-hidden
                        emoji="👥"
                        title="Persönliche Beratung"
                        subtitle="Nutzen Sie professionelle Beratung für bessere Ergebnisse mit unserer Plattform"
                    />
                    <OffersCard
                        role="listitem"
                        aria-hidden
                        emoji="🌐"
                        title="Starkes Netzwerk"
                        subtitle="Erweitern Sie Ihr Netzwerk gezielt und knüpfen Sie wertvolle Kontakte von Partnern"
                    />
                    <OffersCard
                        role="listitem"
                        aria-hidden
                        emoji="⚡"
                        title="Effiziente Prozesse"
                        subtitle="Automatisierte Workflows und intelligente Matching-Algorithmen für bessere Ergebnisse"
                    />
                </EmblaCarousel>
            </div>
            <div
                className="grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-4
                    sm:gap-8 md:gap-6 lg:gap-4 w-full cursor-default hidden"
                role="list"
            >
                <div
                    className="rounded-xl overflow-hidden h-full"
                    role="listitem"
                >
                    <OffersCard
                        aria-hidden
                        emoji="🎯"
                        title="Individuelle Auftragschancen"
                        subtitle="Finden Sie neue Chancen und erhalten Sie passende Angebote für Ihr Unternehmen."
                    />
                </div>
                <div
                    className="rounded-xl overflow-hidden"
                    role="listitem"
                >
                    <OffersCard
                        aria-hidden
                        emoji="👥"
                        title="Persönliche Beratung"
                        subtitle="Nutzen Sie professionelle Beratung für bessere Ergebnisse mit unserer Plattform."
                    />
                </div>
                <div
                    className="rounded-xl overflow-hidden"
                    role="listitem"
                >
                    <OffersCard
                        aria-hidden
                        emoji="🌐"
                        title="Starkes Netzwerk"
                        subtitle="Erweitern Sie Ihr Netzwerk gezielt und knüpfen Sie wertvolle Kontakte von Partnern"
                    />
                </div>
                <div
                    className="rounded-xl overflow-hidden"
                    role="listitem"
                >
                    <OffersCard
                        aria-hidden
                        emoji="⚡"
                        title="Effiziente Prozesse"
                        subtitle="Automatisierte Workflows und intelligente Matching-Algorithmen für bessere Ergebnisse"
                    />
                </div>
            </div>
        </>
    );
};
