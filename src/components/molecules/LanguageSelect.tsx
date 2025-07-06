import * as Select from "@radix-ui/react-select";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { useTranslation } from "react-i18next";

interface LanguageSelectProps {
    variant?: "light" | "dark";
}

const options = [
    { value: "de", label: "Deutsch" },
    { value: "en", label: "English" },
];

export const LanguageSelect = ({ variant = "light" }: LanguageSelectProps) => {
    const [value, setValue] = useState(localStorage.getItem("currentLanguage") || undefined);
    const { i18n } = useTranslation();

    const contentClass = "bg-primary text-accent";

    const itemBase =
        "px-4 py-2 cursor-pointer transition-colors duration-150 flex items-center justify-between outline-0";
    const itemActive = "data-[highlighted]:bg-accent/20";
    const itemRounded = "rounded-md";

    return (
        <Select.Root
            value={value || "de"}
            onValueChange={(value) => {
                setValue(value);
                i18n.changeLanguage(value).then(() => {
                    localStorage.setItem("currentLanguage", value);
                });
            }}
        >
            <Select.Trigger
                className={`flex gap-3 items-center justify-between py-2 text-lg
                    outline-none transition-all duration-200 cursor-pointer group
                    ${variant === "dark" ? "text-primary" : "text-accent"}`}
                aria-label="Sprache wählen"
            >
                <Select.Value />
                <Select.Icon>
                    <FaChevronDown className="text-sm transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Select.Icon>
            </Select.Trigger>
            <Select.Content
                hideWhenDetached={true}
                align="center"
                className={`rounded-xl shadow-lg ${contentClass} animate-fade-in`}
                position="popper"
            >
                <Select.Viewport>
                    {options.map((option) => (
                        <Select.Item
                            key={option.value}
                            value={option.value}
                            className={`
                                    ${itemBase}
                                    ${itemActive}
                                    ${itemRounded}
                                    mx-1 my-1 gap-3`}
                        >
                            <Select.ItemText>{option.label}</Select.ItemText>
                            <Select.ItemIndicator>
                                <TiTick aria-hidden />
                            </Select.ItemIndicator>
                        </Select.Item>
                    ))}
                </Select.Viewport>
            </Select.Content>
        </Select.Root>
    );
};
