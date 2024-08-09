import { PhoneCall, Video } from "lucide-react";
import { twMerge } from "tailwind-merge";

type MessageItemCallProps = {
    type: "audio" | "video";
    isMissed?: boolean;
};

export default function MessageItemCall({
    type,
    isMissed = false,
}: MessageItemCallProps) {
    return (
        <div className={twMerge("flex items-center space-x-3 pr-4 rounded-md")}>
            <div
                className={twMerge(
                    "w-10 h-10 bg-blue-200 dark:bg-blue-500/20 rounded-md flex items-center justify-center text-blue-500 dark:text-blue-400 flex-shrink-0",
                    isMissed &&
                        "bg-red-200 dark:bg-red-500/20 text-red-500 dark:text-red-400"
                )}
            >
                {type === "audio" ? (
                    <PhoneCall size={18} />
                ) : (
                    <Video size={18} />
                )}
            </div>
            <div className="min-w-0 w-full">
                <p className="text-sm font-medium truncate">
                    {isMissed && <>Missed</>}{" "}
                    {type === "audio" ? "Audio" : "Video"} Call
                </p>
            </div>
        </div>
    );
}
