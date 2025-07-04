import { type FC, type HTMLAttributes } from "react";
import { TitleAndSubtitle } from "../molecules/TitleAndSubtitle.tsx";
import { OffersCardsContainer } from "../molecules/offers/OffersCardsContainer.tsx";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { nonVisibleClass, refClass, visibleClass } from "../pages/LandingPage.tsx";

export const OfferSection: FC<HTMLAttributes<HTMLElement>> = () => {
    const [offerRef, offerVisible] = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section className="py-7 sm:py-10 md:py-12">
            <div className="pb-7">
                <TitleAndSubtitle
                    dark={false}
                    title="Was bieten wir Ihnen?"
                    subtitle="Individuelle Auftragschancen, persönliche Beratung und ein starkes Netzwerk – alles aus einer Hand."
                />
            </div>
            <div
                className={`${refClass} ${offerVisible ? visibleClass : nonVisibleClass}`}
                ref={offerRef}
            >
                <div className="w-full flex justify-center">
                    <OffersCardsContainer />
                </div>
            </div>
        </section>
    );
};
