import { type FC, type HTMLAttributes } from "react";
import bauImage from "../../../assets/images/branches/bau.webp";
import booksImage from "../../../assets/images/branches/books.webp";
import itImage from "../../../assets/images/branches/it.webp";
import markersImage from "../../../assets/images/branches/markers.webp";
import governmentImage from "../../../assets/images/branches/government.webp";
import carsImage from "../../../assets/images/branches/cars.webp";
import windImage from "../../../assets/images/branches/wind.webp";
import doctorImage from "../../../assets/images/branches/doctor.webp";
import { BranchesCard } from "./BranchesCard.tsx";
import { EmblaCarousel } from "../EmblaCarousel.tsx";
import { t } from "i18next";

export const BranchesCardContainer: FC<HTMLAttributes<HTMLElement>> = () => {
    return (
        <div
            className="w-full"
            role="region"
            aria-label="Branchen"
        >
            <EmblaCarousel
                aria-label="Branchen-Karussell"
                variant="branches"
                autoplay={false}
                fade={false}
                buttons={true}
                fullWidth={false}
            >
                <BranchesCard
                    src={bauImage}
                    alt={t("branches.cards.0.alt")}
                    title={t("branches.cards.0.title")}
                    text={[
                        t("branches.cards.0.text.0"),
                        t("branches.cards.0.text.1"),
                        t("branches.cards.0.text.2"),
                    ]}
                />
                <BranchesCard
                    src={booksImage}
                    alt={t("branches.cards.1.alt")}
                    title={t("branches.cards.1.title")}
                    text={[
                        t("branches.cards.1.text.0"),
                        t("branches.cards.1.text.1"),
                        t("branches.cards.1.text.2"),
                    ]}
                />
                <BranchesCard
                    src={itImage}
                    alt={t("branches.cards.2.alt")}
                    title={t("branches.cards.2.title")}
                    text={[
                        t("branches.cards.2.text.0"),
                        t("branches.cards.2.text.1"),
                        t("branches.cards.2.text.2"),
                    ]}
                />
                <BranchesCard
                    src={markersImage}
                    alt={t("branches.cards.3.alt")}
                    title={t("branches.cards.3.title")}
                    text={[
                        t("branches.cards.3.text.0"),
                        t("branches.cards.3.text.1"),
                        t("branches.cards.3.text.2"),
                    ]}
                />
                <BranchesCard
                    src={governmentImage}
                    alt={t("branches.cards.4.alt")}
                    title={t("branches.cards.4.title")}
                    text={[
                        t("branches.cards.4.text.0"),
                        t("branches.cards.4.text.1"),
                        t("branches.cards.4.text.2"),
                    ]}
                />
                <BranchesCard
                    src={carsImage}
                    alt={t("branches.cards.5.alt")}
                    title={t("branches.cards.5.title")}
                    text={[
                        t("branches.cards.5.text.0"),
                        t("branches.cards.5.text.1"),
                        t("branches.cards.5.text.2"),
                    ]}
                />
                <BranchesCard
                    src={windImage}
                    alt={t("branches.cards.6.alt")}
                    title={t("branches.cards.6.title")}
                    text={[
                        t("branches.cards.6.text.0"),
                        t("branches.cards.6.text.1"),
                        t("branches.cards.6.text.2"),
                    ]}
                />
                <BranchesCard
                    src={doctorImage}
                    alt={t("branches.cards.7.alt")}
                    title={t("branches.cards.7.title")}
                    text={[
                        t("branches.cards.7.text.0"),
                        t("branches.cards.7.text.1"),
                        t("branches.cards.7.text.2"),
                    ]}
                />
            </EmblaCarousel>
        </div>
    );
};
