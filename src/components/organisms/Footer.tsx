import type { FC } from "react";
import { Logo } from "../atoms/Logo.tsx";
import { Socials } from "../molecules/Socials.tsx";
import { CustomButton } from "../atoms/CustomButton.tsx";
import { useBreakpoint } from "../../utils/breakPointHook.ts";

export const Footer: FC = () => {
    return (
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
                    <p
                        className="text-primary text-[1rem] sm:text-[1.1rem]
                            md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-center sm:text-start"
                    >
                        +49 341 253 479 111
                    </p>
                </li>
                <li>
                    <p
                        className="text-primary text-[1rem] sm:text-[1.1rem]
                            md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-center sm:text-start"
                    >
                        +49 341 253 479 222
                    </p>
                </li>
                <li>
                    <p
                        className="text-primary text-[1rem] sm:text-[1.1rem]
                            md:text-[1.15rem] lg:text-[1.2rem] leading-snug self-center text-center sm:text-start"
                    >
                        email@example.com
                    </p>
                </li>
                <li>
                    <Socials />
                </li>
            </ul>
            <CustomButton
                className="w-full sm:max-w-1/3 md:max-w-1/4  self-center sm:self-start"
                intent="outline"
                size={useBreakpoint()}
            >
                Jetzt starten
            </CustomButton>
        </div>
    );
};
