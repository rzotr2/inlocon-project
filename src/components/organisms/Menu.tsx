import type { FC } from "react";
import { LanguageSelect } from "../molecules/LanguageSelect.tsx";
import { Paragraph } from "../atoms/Paragraph.tsx";
import { useTranslation } from "react-i18next";

interface MenuProps {
    menuOpened: boolean;
}

export const Menu: FC<MenuProps> = ({ menuOpened }) => {
    const { t } = useTranslation();

    return (
        <aside
            className={`fixed left-0 top-[64px] w-screen h-[calc(100vh-64px)] bg-bg-primary z-40 sm:hidden overflow-hidden
            transition-all duration-300 ${menuOpened ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
            <div className="w-full h-full flex justify-center items-center ">
                <ul className="flex flex-col gap-3 items-center">
                    <li>
                        <a href="#">
                            <Paragraph
                                intent="secondary"
                                size="lg"
                                className="hover:border-accent border-b-1 pb-0.5 border-transparent"
                            >
                                {t("header.contacts")}
                            </Paragraph>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+49341253479111">
                            <a href="#">
                                <Paragraph
                                    intent="secondary"
                                    size="lg"
                                    className="hover:border-accent border-b-1 border-transparent"
                                >
                                    {t("about")}
                                </Paragraph>
                            </a>
                        </a>
                    </li>
                    <li>
                        <LanguageSelect variant="light" />
                    </li>
                </ul>
            </div>
        </aside>
    );
};
