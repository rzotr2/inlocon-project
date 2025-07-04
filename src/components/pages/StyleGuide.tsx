import type { FC, ReactNode } from "react";
import { CustomButton } from "../atoms/CustomButton.tsx";
import { Paragraph } from "../atoms/Paragraph.tsx";
import { Logo } from "../atoms/Logo.tsx";
import { Input } from "../atoms/Input.tsx";
import { Header } from "../organisms/Header.tsx";

export const StyleGuide: FC = (): ReactNode => {
    return (
        <div className="w-full">
            <h2 className="paragraph-2xl m-5">Buttons</h2>
            <div className="flex gap-5 m-5 items-center">
                <div className="flex flex-col gap-5">
                    <CustomButton
                        size="sm"
                        intent="primary"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="md"
                        intent="primary"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="lg"
                        intent="primary"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="sm"
                        intent="primary"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="md"
                        intent="primary"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="lg"
                        intent="primary"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                </div>
                <div className="flex flex-col gap-5">
                    <CustomButton
                        size="sm"
                        intent="secondary"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="md"
                        intent="secondary"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="lg"
                        intent="secondary"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="sm"
                        intent="secondary"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="md"
                        intent="secondary"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="lg"
                        intent="secondary"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                </div>
                <div className="flex flex-col gap-5">
                    <CustomButton
                        size="sm"
                        intent="outline"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="md"
                        intent="outline"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="lg"
                        intent="outline"
                        className="self-start"
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="sm"
                        intent="outline"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="md"
                        intent="outline"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                    <CustomButton
                        size="lg"
                        intent="outline"
                        className="self-start"
                        roundness={true}
                    >
                        Jetzt starten
                    </CustomButton>
                </div>
            </div>
            <div className="h-0.5 w-auto bg-accent"></div>
            <h2 className="paragraph-2xl m-5">Typography</h2>
            <div className="flex flex-wrap w-full">
                <div className="w-1/2">
                    <div className="flex flex-col m-5 gap-5 bg-accent py-2">
                        <Paragraph
                            intent="primary"
                            size="lg"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                        <Paragraph
                            intent="primary"
                            size="md"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                        <Paragraph
                            intent="primary"
                            size="sm"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                    </div>
                    <div className="flex flex-col m-5 gap-5">
                        <Paragraph
                            intent="secondary"
                            size="lg"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                        <Paragraph
                            intent="secondary"
                            size="md"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                        <Paragraph
                            intent="secondary"
                            size="sm"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex flex-col m-5 gap-5 items-center bg-accent py-2">
                        <Paragraph
                            intent="primary"
                            size="heading"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                        <Paragraph
                            intent="primary"
                            size="subheading"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                    </div>
                    <div className="flex flex-col m-5 gap-5 items-center">
                        <Paragraph
                            intent="secondary"
                            size="heading"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                        <Paragraph
                            intent="secondary"
                            size="subheading"
                            className="py-2 px-5"
                        >
                            Some paragraph
                        </Paragraph>
                    </div>
                </div>
            </div>
            <div className="h-0.5 w-auto bg-accent"></div>
            <h2 className="paragraph-2xl m-5">Logos</h2>
            <div className="flex flex-wrap gap-5 m-5">
                <Logo
                    intent="light"
                    size="lg"
                    className="bg-accent"
                />
                <Logo
                    intent="light"
                    size="md"
                    className="bg-accent"
                />
                <Logo
                    intent="light"
                    size="sm"
                    className="bg-accent"
                />
            </div>
            <div className="flex flex-wrap gap-5 m-5">
                <Logo
                    intent="dark"
                    size="lg"
                />
                <Logo
                    intent="dark"
                    size="md"
                />
                <Logo
                    intent="dark"
                    size="sm"
                />
            </div>
            <div className="h-0.5 w-auto bg-accent"></div>
            <h2 className="paragraph-2xl m-5">Inputs</h2>
            <div className="flex flex-col items-center gap-5 m-5 bg-accent">
                <div className="p-4 ">
                    <Input
                        size="sm"
                        className=""
                    />
                </div>
                <div className="p-4 ">
                    <Input
                        size="md"
                        className=""
                    />
                </div>
                <div className="p-4 ">
                    <Input
                        size="lg"
                        className=""
                    />
                </div>
            </div>
            <div className="h-0.5 w-auto bg-accent"></div>
            <h2 className="paragraph-2xl m-5">Header</h2>
            <div className="m-5">
                <Header />
            </div>
        </div>
    );
};
