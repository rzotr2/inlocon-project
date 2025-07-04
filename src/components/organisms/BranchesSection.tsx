import { type FC, type HTMLAttributes } from "react";
import { TitleAndSubtitle } from "../molecules/TitleAndSubtitle.tsx";
import { BranchesCardContainer } from "../molecules/branches/BranchesCardContainer.tsx";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { nonVisibleClass, refClass, visibleClass } from "../pages/LandingPage.tsx";

export const BranchesSection: FC<HTMLAttributes<HTMLElement>> = () => {
    const [branchesRef, branchesVisible] = useFadeInOnScroll<HTMLDivElement>();

    return (
        <section
            className="pb-5"
            aria-labelledby="branches-heading"
        >
            <div className="pt-5 sm:pt-10 md:pt-15 lg:pt-20 pb-10 w-full h-full">
                <TitleAndSubtitle
                    id="branches-heading"
                    title="In diesen Branchen finden Sie passende Ausschreibungen"
                    subtitle="Wählen Sie Ihre Interessensgebiete und erhalten Sie aktuelle
                    Ausschreibungen und Verträge aus den wichtigsten Wirtschaftssektoren."
                />
            </div>
            <div
                className={`${refClass} ${branchesVisible ? visibleClass : nonVisibleClass}`}
                ref={branchesRef}
            >
                <BranchesCardContainer />
            </div>
        </section>
    );
};
