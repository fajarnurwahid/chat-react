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
        <div
            className={twMerge(
                "flex items-center space-x-3 border border-blue-500 p-1 pr-3 rounded-md",
                isMissed && "border-red-500"
            )}
        >
            <div
                className={twMerge(
                    "w-10 h-10 bg-blue-200 rounded flex items-center justify-center text-blue-500 flex-shrink-0",
                    isMissed && "bg-red-500 text-neutral-100"
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
