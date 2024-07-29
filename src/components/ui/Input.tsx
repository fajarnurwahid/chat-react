import { twMerge } from "tailwind-merge";

export default function Input({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={twMerge(
                "h-9 rounded-lg bg-neutral-50 outline-none w-full px-4 text-sm border border-neutral-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all",
                className
            )}
            {...props}
        />
    );
}
