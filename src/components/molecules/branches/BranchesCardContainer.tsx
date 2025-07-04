import { type FC, type HTMLAttributes } from "react";
import bauImage from "../../../assets/images/branches/bau.webp";
import booksImage from "../../../assets/images/branches/books.webp";
import itImage from "../../../assets/images/branches/it.webp";
import markersImage from "../../../assets/images/branches/markers.webp";
import governmentImage from "../../../assets/images/branches/government.webp";
import carsImage from "../../../assets/images/branches/cars.webp";
import windImage from "../../../assets/images/branches/wind.webp";
import doctorImage from "../../../assets/images/branches/doctor.webp";
import { BranchesCard } from "./BranchesCard.tsx";
import { EmblaCarousel } from "../EmblaCarousel.tsx";

export const BranchesCardContainer: FC<HTMLAttributes<HTMLElement>> = () => {
    return (
        <div
            className="w-full"
            role="region"
            aria-label="Branchen"
        >
            <EmblaCarousel
                aria-label="Branchen-Karussell"
                variant="branches"
                autoplay={false}
                fade={false}
                buttons={true}
                fullWidth={false}
            >
                <BranchesCard
                    src={bauImage}
                    alt="Bau & Infrastruktur image"
                    title="BAU & INFRASTRUKTUR"
                    text={[
                        "Zugang zu Bauausschreibungen für Hoch- und Tiefbauprojekte",
                        "Informationen zu geplanten Infrastrukturmaßnahmen",
                        "Kontakte zu Bauunternehmen",
                    ]}
                />
                <BranchesCard
                    src={booksImage}
                    alt="BILDUNG & FORSCHUNG image"
                    title="BILDUNG & FORSCHUNG"
                    text={[
                        "Ausschreibungen für innovative Bildungs- und Forschungsprojekte",
                        "Fördermöglichkeiten und Partnerschaften im Wissenschaftsbereich",
                        "Bedarf an Ausstattung und Services für Bildungseinrichtungen",
                    ]}
                />
                <BranchesCard
                    src={itImage}
                    alt="IT & DIGITALISIERUNG image"
                    title="IT & DIGITALISIERUNG"
                    text={[
                        "IT-Dienstleistungen und Softwarelösungen für Unternehmen",
                        "Projekte zur digitalen Transformation",
                        "Ausschreibungen für Hardware, Netzwerke und IT-Sicherheit",
                    ]}
                />
                <BranchesCard
                    src={markersImage}
                    alt="BÜRO & AUSSTATTUNG image"
                    title="BÜRO & AUSSTATTUNG"
                    text={[
                        "Beschaffung von Bürobedarf, Möbeln und Technik",
                        "Angebote für Arbeitsplatzausstattung und Ergonomie",
                        "Dienstleistungen für Büroorganisation und Facility Management",
                    ]}
                />
                <BranchesCard
                    src={governmentImage}
                    alt="DIENSTLEISTUNGEN image"
                    title="DIENSTLEISTUNGEN"
                    text={[
                        "Ausschreibungen für Reinigungs-, Wartungs- und Sicherheitsdienste",
                        "Beratungs- und Managementdienstleistungen",
                        "Angebote für Event-, Catering- und Logistikservices",
                    ]}
                />
                <BranchesCard
                    src={carsImage}
                    alt="MOBILITÄT & FAHRZEUGE image"
                    title="MOBILITÄT & FAHRZEUGE"
                    text={[
                        "Fuhrparkmanagement und Fahrzeugbeschaffung",
                        "Leasing- und Mietangebote für PKW, LKW und Spezialfahrzeuge",
                        "Dienstleistungen rund um Transport",
                    ]}
                />
                <BranchesCard
                    src={windImage}
                    alt="ENERGIE & UMWELT image"
                    title="ENERGIE & UMWELT"
                    text={[
                        "Projekte im Bereich erneuerbare Energien und Energieeffizienz",
                        "Umweltmanagement und nachhaltige Lösungen",
                        "Ausschreibungen für Versorgungs- und Entsorgungsleistungen",
                    ]}
                />
                <BranchesCard
                    src={doctorImage}
                    alt="GESUNDHEIT & SOZIALES image"
                    title="GESUNDHEIT & SOZIALES"
                    text={[
                        "Beschaffung von medizinischer Ausstattung und Verbrauchsmaterial",
                        "Dienstleistungen für Pflege, Betreuung und soziale Einrichtungen",
                        "Projekte im Bereich Gesundheitsmanagement",
                    ]}
                />
            </EmblaCarousel>
        </div>
    );
};
