import { type FC, type HTMLAttributes } from "react";
import { OffersCard } from "./OffersCard.tsx";
import { EmblaCarousel } from "../EmblaCarousel.tsx";
import { t } from "i18next";

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
                        title={t("offer.cards.0.title")}
                        subtitle={t("offer.cards.0.subtitle")}
                    />
                    <OffersCard
                        role="listitem"
                        aria-hidden
                        emoji="👥"
                        title={t("offer.cards.1.title")}
                        subtitle={t("offer.cards.1.subtitle")}
                    />
                    <OffersCard
                        role="listitem"
                        aria-hidden
                        emoji="🌐"
                        title={t("offer.cards.2.title")}
                        subtitle={t("offer.cards.2.subtitle")}
                    />
                    <OffersCard
                        role="listitem"
                        aria-hidden
                        emoji="⚡"
                        title={t("offer.cards.3.title")}
                        subtitle={t("offer.cards.3.subtitle")}
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
                        title={t("offer.cards.0.title")}
                        subtitle={t("offer.cards.0.subtitle")}
                    />
                </div>
                <div
                    className="rounded-xl overflow-hidden"
                    role="listitem"
                >
                    <OffersCard
                        aria-hidden
                        emoji="👥"
                        title={t("offer.cards.1.title")}
                        subtitle={t("offer.cards.1.subtitle")}
                    />
                </div>
                <div
                    className="rounded-xl overflow-hidden"
                    role="listitem"
                >
                    <OffersCard
                        aria-hidden
                        emoji="🌐"
                        title={t("offer.cards.2.title")}
                        subtitle={t("offer.cards.2.subtitle")}
                    />
                </div>
                <div
                    className="rounded-xl overflow-hidden"
                    role="listitem"
                >
                    <OffersCard
                        aria-hidden
                        emoji="⚡"
                        title={t("offer.cards.3.title")}
                        subtitle={t("offer.cards.3.subtitle")}
                    />
                </div>
            </div>
        </>
    );
};
