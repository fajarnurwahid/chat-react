import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type SettingGroupItemProps = {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
};

export default function SettingGroupItem({
    title,
    icon,
    children,
    defaultOpen = false,
}: SettingGroupItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div>
            <button
                type="button"
                className="flex items-center justify-between w-full text-left py-3 px-4 md:px-6 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center space-x-3">
                    {icon}
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {title}
                    </span>
                </div>
                <ChevronRight
                    size={16}
                    className={twMerge(
                        "text-neutral-500 dark:text-neutral-400",
                        isOpen && "rotate-90"
                    )}
                />
            </button>
            {isOpen && <div className="py-4 px-4 md:px-6">{children}</div>}
        </div>
    );
}
