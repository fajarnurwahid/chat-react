import { Download, File } from "lucide-react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type MessageItemFileProps = React.HTMLAttributes<HTMLDivElement> & {
    name: string;
    size: string;
};

export default function MessageItemFile({
    name,
    size,
    className,
    ...props
}: MessageItemFileProps) {
    return (
        <div className={twMerge("flex items-center", className)} {...props}>
            <div className="w-10 h-10 bg-blue-200 rounded flex items-center justify-center text-blue-500 flex-shrink-0 mr-3">
                <File size={18} />
            </div>
            <div className="min-w-0 w-full mr-6">
                <p className="text-sm font-medium truncate mb-1">{name}</p>
                <p className="text-xs text-neutral-500">{size}</p>
            </div>
            <Link to="/">
                <Download size={16} />
            </Link>
        </div>
    );
}
