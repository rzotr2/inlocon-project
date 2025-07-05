import type { FC } from "react";
import { EmblaCarousel } from "../molecules/EmblaCarousel.tsx";
import { FeedbackCard } from "../molecules/feedback/FeedbackCard.tsx";
import feedbackImage from "../../assets/svg/feedback.svg";
import ideaImage from "../../assets/svg/idea.svg";
import { t } from "i18next";

export const FeedbackSection: FC = () => {
    return (
        <section className="pt-7 sm:pt-10 md:pt-12">
            <div className="block md:hidden rounded-sm overflow-hidden">
                <EmblaCarousel
                    autoplay={false}
                    fade={false}
                    buttons={true}
                    fullWidth={true}
                    variant="feedback"
                >
                    <FeedbackCard
                        intent="primary"
                        src={ideaImage}
                        text={t("feedback.cards.0.text")}
                        buttonText={t("feedback.cards.0.buttonText")}
                    />
                    <FeedbackCard
                        intent="secondary"
                        src={feedbackImage}
                        text={t("feedback.cards.1.text")}
                        buttonText={t("feedback.cards.1.buttonText")}
                    />
                </EmblaCarousel>
            </div>
            <div className="hidden md:flex rounded-sm overflow-hidden">
                <div className="w-1/2">
                    <FeedbackCard
                        intent="primary"
                        src={ideaImage}
                        text={t("feedback.cards.0.text")}
                        buttonText={t("feedback.cards.0.buttonText")}
                    />
                </div>
                <div className="w-1/2">
                    <FeedbackCard
                        intent="secondary"
                        src={feedbackImage}
                        text={t("feedback.cards.1.text")}
                        buttonText={t("feedback.cards.1.buttonText")}
                    />
                </div>
            </div>
        </section>
    );
};
