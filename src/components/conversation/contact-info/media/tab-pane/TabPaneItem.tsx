import { twMerge } from "tailwind-merge";

type TabPaneItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean;
    children: React.ReactNode;
};

export default function TabPaneItem({
    isActive,
    children,
    ...props
}: TabPaneItemProps) {
    return (
        <button
            type="button"
            className={twMerge(
                "h-8 px-2 rounded text-neutral-700 [&.active]:bg-white [&.active]:shadow text-[13px] font-medium w-full",
                isActive && "active"
            )}
            {...props}
        >
            {children}
        </button>
    );
}
