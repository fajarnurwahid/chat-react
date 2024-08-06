import VideoItem from "./VideoItem";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {});

export default function Video() {
    return (
        <div className="grid grid-cols-3 gap-2">
            <VideoItem
                data-fancybox="media-image"
                data-src="https://youtu.be/uMxQI5DuGGk?si=LkZQmK_bC74ErWsy"
                src="https://github.com/shadcn.png"
            />
            <VideoItem
                data-fancybox="media-image"
                data-src="https://youtu.be/uMxQI5DuGGk?si=LkZQmK_bC74ErWsy"
                src="https://github.com/shadcn.png"
            />
            <VideoItem
                data-fancybox="media-image"
                data-src="https://youtu.be/uMxQI5DuGGk?si=LkZQmK_bC74ErWsy"
                src="https://github.com/shadcn.png"
            />
            <VideoItem
                data-fancybox="media-image"
                data-src="https://youtu.be/uMxQI5DuGGk?si=LkZQmK_bC74ErWsy"
                src="https://github.com/shadcn.png"
            />
            <VideoItem
                data-fancybox="media-image"
                data-src="https://youtu.be/uMxQI5DuGGk?si=LkZQmK_bC74ErWsy"
                src="https://github.com/shadcn.png"
            />
            <VideoItem
                data-fancybox="media-image"
                data-src="https://youtu.be/uMxQI5DuGGk?si=LkZQmK_bC74ErWsy"
                src="https://github.com/shadcn.png"
            />
        </div>
    );
}
