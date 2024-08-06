import ImageItem from "./ImageItem";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {});

export default function Image() {
    return (
        <div className="grid grid-cols-3 gap-2">
            <ImageItem
                data-fancybox="media-image"
                data-src="https://github.com/shadcn.png"
                src="https://github.com/shadcn.png"
            />
            <ImageItem
                data-fancybox="media-image"
                data-src="https://github.com/shadcn.png"
                src="https://github.com/shadcn.png"
            />
            <ImageItem
                data-fancybox="media-image"
                data-src="https://github.com/shadcn.png"
                src="https://github.com/shadcn.png"
            />
            <ImageItem
                data-fancybox="media-image"
                data-src="https://github.com/shadcn.png"
                src="https://github.com/shadcn.png"
            />
            <ImageItem
                data-fancybox="media-image"
                data-src="https://github.com/shadcn.png"
                src="https://github.com/shadcn.png"
            />
            <ImageItem
                data-fancybox="media-image"
                data-src="https://github.com/shadcn.png"
                src="https://github.com/shadcn.png"
            />
        </div>
    );
}
