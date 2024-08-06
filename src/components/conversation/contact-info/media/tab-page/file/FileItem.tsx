import { Download, File } from "lucide-react";
import { twMerge } from "tailwind-merge";

type FileItemProps = React.HTMLAttributes<HTMLDivElement> & {
    name: string;
    size: string;
};

export default function FileItem({
    name,
    size,
    className,
    ...props
}: FileItemProps) {
    return (
        <div
            className={twMerge(
                "flex items-center justify-between space-x-4 h-14 rounded-lg border border-neutral-200 px-2",
                className
            )}
            {...props}
        >
            <div className="flex items-center space-x-2 min-w-0 w-full">
                <div className="rounded-full flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-500 flex-shrink-0">
                    <File size={16} />
                </div>
                <div className="min-w-0 w-full">
                    <p className="text-sm font-medium truncate text-neutral-700 mb-0.5">
                        {name}
                    </p>
                    <p className="text-neutral-500 text-xs">{size}</p>
                </div>
            </div>
            <button
                type="button"
                className="text-neutral-500 hover:text-neutral-700 flex-shrink-0"
            >
                <Download size={16} />
            </button>
        </div>
    );
}
