import { useEffect, useState } from "react";

export function useBreakpoint(): "sm" | "md" | "lg" {
    const [breakpoint, setBreakpoint] = useState<"sm" | "md" | "lg">("sm");

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width >= 1024) {
                setBreakpoint("lg");
            } else if (width >= 640) {
                setBreakpoint("md");
            } else {
                setBreakpoint("sm");
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
}
