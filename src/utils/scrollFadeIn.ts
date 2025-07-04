import { type RefObject, useEffect, useRef, useState } from "react";

export function useFadeInOnScroll<T extends HTMLElement = HTMLDivElement>(
    threshold = 0.2,
): [RefObject<T | null>, boolean] {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible];
}
