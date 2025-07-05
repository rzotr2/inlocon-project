import type { FC } from "react";
import { TitleAndSubtitle } from "../molecules/TitleAndSubtitle.tsx";
import { nonVisibleClass, refClass, visibleClass } from "../pages/LandingPage.tsx";
import { useFadeInOnScroll } from "../../utils/scrollFadeIn.ts";
import { Input } from "../atoms/Input.tsx";
import { CustomButton } from "../atoms/CustomButton.tsx";
import { useBreakpoint } from "../../utils/breakPointHook.ts";
import { t } from "i18next";

export const EmailSection: FC = () => {
    const [emailRef, emailVisible] = useFadeInOnScroll<HTMLDivElement>();
    const breakpointHook = useBreakpoint();

    return (
        <>
            <section className="py-7 sm:py-10 md:py-12 bg-accent rounded-xl">
                <div
                    className={`${refClass} ${emailVisible ? visibleClass : nonVisibleClass}`}
                    ref={emailRef}
                >
                    <div className="pb-10 px-4">
                        <TitleAndSubtitle
                            dark={false}
                            title={t("email.title")}
                            subtitle={t("email.subtitle")}
                        />
                    </div>
                    <div className="flex justify-center gap-3">
                        <Input
                            size={breakpointHook}
                            className="max-w-[55%] sm:max-w-full"
                        />
                        <CustomButton
                            intent="secondary"
                            size={breakpointHook}
                            roundness={true}
                        >
                            {t("email.button")}
                        </CustomButton>
                    </div>
                </div>
            </section>
        </>
    );
};
