import * as React from "react";
import { type FC, type HTMLAttributes, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { VscThreeBars } from "react-icons/vsc";

export const HamburgerMenu: FC<HTMLAttributes<HTMLDivElement>> = ({ onClick, ...props }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setMenuOpen((open) => !open);
        if (onClick) onClick(e);
    };

    return (
        <div
            className="sm:hidden flex gap-1 bg-gray-100 px-1 py-1 rounded-sm items-center cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={handleClick}
            {...props}
        >
            <p>Menü</p>
            <button
                className="relative w-6 h-6"
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                type="button"
                tabIndex={-1} // щоб не було дублювання фокусу
            >
                <RxCross2
                    className={`absolute inset-0 transition-opacity duration-200 cursor-pointer
                        ${menuOpen ? "opacity-100" : "opacity-0"} text-subheading`}
                />
                <VscThreeBars
                    className={`absolute inset-0 transition-opacity duration-200 cursor-pointer
                        ${menuOpen ? "opacity-0" : "opacity-100"} text-subheading`}
                />
            </button>
        </div>
    );
};
