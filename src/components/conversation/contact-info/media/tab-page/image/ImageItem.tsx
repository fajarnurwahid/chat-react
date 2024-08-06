import { twMerge } from "tailwind-merge";

export default function ImageItem({
    className,
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            className={twMerge(
                "rounded-lg aspect-square object-cover",
                className
            )}
            {...props}
        />
    );
}
