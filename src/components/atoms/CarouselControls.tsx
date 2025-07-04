import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselButtonProps {
    onClick: () => void;
}

export const CarouselPrevButton = ({ onClick }: CarouselButtonProps) => {
    return (
        <>
            <button
                onClick={onClick}
                className="rounded-full bg-accent text-white p-2 shadow transition hover:bg-accent/80 cursor-pointer"
                aria-label="Next slide"
            >
                <FaChevronLeft />
            </button>
        </>
    );
};

export const CarouselNextButton = ({ onClick }: CarouselButtonProps) => {
    return (
        <>
            <button
                onClick={onClick}
                className="rounded-full bg-accent text-white p-2 shadow transition hover:bg-accent/80 cursor-pointer"
                aria-label="Next slide"
            >
                <FaChevronRight />
            </button>
        </>
    );
};
