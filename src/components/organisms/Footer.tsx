import type { FC } from "react";
import { Logo } from "../atoms/Logo.tsx";
import { Socials } from "../molecules/Socials.tsx";
import { CustomButton } from "../atoms/CustomButton.tsx";
import { useBreakpoint } from "../../utils/breakPointHook.ts";
import { t } from "i18next";

export const Footer: FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-6 py-6 sm:flex-row sm:justify-between sm:items-start sm:gap-7">
                <ul className="space-y-4 sm:space-y-2">
                    <li>
                        <Logo intent="light" />
                    </li>
                    <li>
                        <p
                            className="text-primary text-[1rem] sm:text-[1.1rem] min-w-[100%]
                                md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-center sm:text-start"
                        >
                            Erich-Zeigner-Allee 36
                        </p>
                    </li>
                    <li>
                        <p
                            className="text-primary text-[1rem] sm:text-[1.1rem]
                                md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-center sm:text-start"
                        >
                            04229 Leipzig
                        </p>
                    </li>
                </ul>
                <ul className="space-y-4 sm:space-y-2">
                    <li>
                        <a
                            href="tel:+49341253479111"
                            className="text-primary text-[1rem] sm:text-[1.1rem]
                                md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-center sm:text-start"
                        >
                            +49 341 253 479 111
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:+49341253479222"
                            className="text-primary text-[1rem] sm:text-[1.1rem]
                                md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-center sm:text-start"
                        >
                            +49 341 253 479 222
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:email@example.com"
                            className="text-primary text-[1rem] sm:text-[1.1rem]
                                md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-center sm:text-start"
                        >
                            email@example.com
                        </a>
                    </li>
                    <li>
                        <Socials />
                    </li>
                </ul>
                <CustomButton
                    className="w-full max-w-full sm:max-w-1/4 self-center sm:self-start"
                    intent="white"
                    roundness={true}
                    size={useBreakpoint()}
                >
                    {t("startButton")}
                </CustomButton>
            </div>
            <div className="flex justify-center sm:justify-start py-2">
                <p className="text-[1.2rem] text-primary opacity-50">© 2025 Inlocon AG</p>
            </div>
        </div>
    );
};
