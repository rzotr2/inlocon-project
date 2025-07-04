import { type FC, type ReactNode } from "react";
import { Logo } from "../atoms/Logo.tsx";
import { Paragraph } from "../atoms/Paragraph.tsx";
import { LanguageSelect } from "../molecules/LanguageSelect.tsx";
import { HamburgerMenu } from "../atoms/HamburgerMenu.tsx";

interface HeaderProps {
    transparent?: boolean;
    openMenu: () => void;
}

export const Header: FC<HeaderProps> = ({ transparent = true, openMenu }): ReactNode => {
    return (
        <nav
            className={`flex items-center justify-between px-2 py-1 ${transparent ? "" : "bg-bg-primary shadow-lg"}
                py-2 sm:px-5 md:px-11 lg:px-[60px] xl:px-[120px] transition-colors duration-500`}
        >
            <Logo intent={transparent ? "light" : "dark"} />
            <HamburgerMenu
                onClick={openMenu}
                aria-label="Menü öffnen"
            />
            <ul className="sm:gap-7 md:gap-9 lg:gap-10 items-center hidden sm:flex">
                <li>
                    <LanguageSelect variant={transparent ? "dark" : "light"} />
                </li>
                <li>
                    <a href="#">
                        <Paragraph
                            intent={transparent ? "primary" : "secondary"}
                            size="lg"
                            className={`${transparent ? "hover:border-primary" : "hover:border-accent"} border-b-1 pb-0.5 border-transparent`}
                        >
                            Kontakte
                        </Paragraph>
                    </a>
                </li>
                <li>
                    <a href="tel:+49341253479111">
                        <Paragraph
                            intent={transparent ? "primary" : "secondary"}
                            size="lg"
                            className={`${transparent ? "hover:border-primary" : "hover:border-accent"} border-b-1 pb-0.5 border-transparent`}
                        >
                            +49-341-253-479-111
                        </Paragraph>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
