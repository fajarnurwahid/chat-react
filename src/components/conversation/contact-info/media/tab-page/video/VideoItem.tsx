import { Play } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function VideoItem({
    className,
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className="relative rounded-lg overflow-hidden group/media-video">
            <img
                className={twMerge(
                    "aspect-square w-full object-cover",
                    className
                )}
                {...props}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 group-hover/media-video:bg-black/50 flex items-center justify-center text-neutral-100 pointer-events-none">
                <Play size={20} />
            </div>
        </div>
    );
}
