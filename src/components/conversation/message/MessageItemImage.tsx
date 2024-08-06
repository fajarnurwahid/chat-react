import { twMerge } from "tailwind-merge";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {});

type MessageItemImageProps = React.HTMLAttributes<HTMLDivElement> & {
    images: React.ImgHTMLAttributes<HTMLImageElement>[];
};

export default function MessageItemImage({
    images,
    className,
    ...props
}: MessageItemImageProps) {
    return (
        <div
            className={twMerge(
                "max-w-64",
                images.length > 1 && "grid grid-cols-3 gap-2",
                images.length === 2 && "grid-cols-2",
                images.length === 0 && "hidden",
                className
            )}
            {...props}
        >
            {images.map((image, i) => (
                <img
                    key={i}
                    data-fancybox="gallery"
                    data-src={image.src}
                    className="w-full rounded"
                    {...image}
                />
            ))}
        </div>
    );
}
