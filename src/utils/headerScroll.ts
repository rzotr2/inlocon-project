import { useEffect, useRef, useState } from "react";

export function useHeaderVariantWatcher(targets: ("dark" | "light" | "transparent")[]) {
    const [variant, setVariant] = useState<"dark" | "light" | "transparent">("dark");
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = document.querySelector("header")?.clientHeight || 0;
            const scrollY = window.scrollY + headerHeight + 1;
            for (let i = 0; i < refs.current.length; i++) {
                const el = refs.current[i];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                const bottom = rect.bottom + window.scrollY;
                if (scrollY >= top && scrollY < bottom) {
                    setVariant(targets[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [targets]);

    return [refs, variant] as const;
}
