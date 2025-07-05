import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { type ReactNode, useCallback, useEffect, useState } from "react";
import Fade from "embla-carousel-fade";
import { CarouselNextButton, CarouselPrevButton } from "../atoms/CarouselControls.tsx";
import { useScreenWidth } from "../../utils/screenWidthHook.ts";

interface EmblaCarouselProps {
    children: ReactNode[];
    autoplay?: boolean;
    fade?: boolean;
    fullWidth?: boolean;
    buttons?: boolean;
    variant?: "features" | "offers" | "branches" | "feedback";
}

export const EmblaCarousel = ({
    children,
    autoplay = true,
    fade = true,
    fullWidth = true,
    buttons = false,
    variant = "features",
}: EmblaCarouselProps) => {
    const plugins = [];
    const screenWidth = useScreenWidth();

    const branchesClasses =
        "basis-[75%] max-w-[75%] sm:basis-[70%] sm:max-w-[70%] md:basis-[55%] md:max-w-[55%] lg:basis-[29%] lg:max-w-[29%] px-1";
    const offersClasses = "max-w-1/3 basis-1/3 sm:px-2 h-full";

    if (autoplay) {
        plugins.push(Autoplay());
    }
    if (fade) {
        plugins.push(Fade());
    }

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);
    const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const updateScrollSnaps = () => setScrollSnaps(emblaApi.scrollSnapList());
        const onSelect = () => setSelectedSlideIndex(emblaApi.selectedScrollSnap());

        emblaApi.on("reInit", updateScrollSnaps);
        updateScrollSnaps();

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", updateScrollSnaps);
        };
    }, [emblaApi]);

    return (
        <div className="w-full h-full">
            <div className={variant === "branches" ? "rounded-sm overflow-hidden" : ""}>
                <div
                    className="overflow-hidden w-full h-full"
                    ref={emblaRef}
                >
                    <div className="flex w-full h-full">
                        {children.map((child, idx) => {
                            let isDimmed = true;
                            const lastIdx = children.length - 1;

                            if (screenWidth >= 1024) {
                                const prevIdx =
                                    selectedSlideIndex === 0 ? lastIdx : selectedSlideIndex - 1;
                                const nextIdx =
                                    selectedSlideIndex === lastIdx ? 0 : selectedSlideIndex + 1;
                                if (
                                    idx === selectedSlideIndex ||
                                    idx === prevIdx ||
                                    idx === nextIdx
                                ) {
                                    isDimmed = false;
                                }
                            } else if (screenWidth >= 640) {
                                if (idx === selectedSlideIndex) {
                                    isDimmed = false;
                                }
                            } else {
                                if (idx === selectedSlideIndex) {
                                    isDimmed = false;
                                }
                            }

                            return (
                                <div
                                    key={idx}
                                    className={[
                                        variant === "offers"
                                            ? ""
                                            : `${variant !== "branches" && "basis-full max-w-full"} grow-0 shrink-0 h-full`,
                                        "transition-opacity duration-300 items-stretch",
                                        !fullWidth
                                            ? variant === "branches"
                                                ? branchesClasses
                                                : offersClasses
                                            : "",
                                        (isDimmed && variant === "branches") || variant === "offers"
                                            ? "opacity-60 pointer-events-none"
                                            : "opacity-100 pointer-events-auto",
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                >
                                    {child}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {buttons && (
                <div className="flex justify-center my-4 items-center gap-3">
                    {variant !== "feedback" && (
                        <CarouselPrevButton
                            onClick={onPrevButtonClick}
                            ria-label="Vorherige Branche"
                        />
                    )}
                    {scrollSnaps.map((_, idx) => (
                        <button
                            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                            key={idx}
                            className={`w-[14px] h-[14px] rounded-full backdrop-blur-lg shadow-sm cursor-pointer 
                                ${selectedSlideIndex === idx ? "bg-accent" : "bg-[#D1D5DB]"}`}
                            aria-label={`Zum Slide №${idx} gehen`}
                        />
                    ))}
                    {variant !== "feedback" && (
                        <CarouselNextButton
                            onClick={onNextButtonClick}
                            aria-label="Nächste Branche"
                        />
                    )}
                </div>
            )}
        </div>
    );
};
