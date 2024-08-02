import { MoreHorizontal, MessageCircle, PhoneCall, Video } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../ui/Popover";

type ChatContactItemProps = {
    image: string;
    name: string;
    status: string;
    isOnline?: boolean;
};

export default function ChatContactItem({
    image,
    name,
    status,
    isOnline = false,
}: ChatContactItemProps) {
    return (
        <div className="flex items-center justify-between h-12 px-4 space-x-3">
            <div className="w-full min-w-0 flex items-center space-x-3">
                <div className="relative flex-shrink-0 w-10 h-10">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full rounded-full"
                    />
                    {isOnline && (
                        <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></div>
                    )}
                </div>
                <div className="min-w-0 w-full">
                    <p className="font-medium text-sm leading-tight truncate mb-0.5">
                        {name}
                    </p>
                    <p className="text-xs text-neutral-500 truncate">
                        {status}
                    </p>
                </div>
            </div>
            <div className="flex-shrink-0">
                <Popover placement="bottom-end">
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 text-neutral-500 hover:text-neutral-700 [&[data-state=open]]:bg-blue-50 [&[data-state=open]]:text-blue-500"
                        >
                            <MoreHorizontal size={16} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverMenu>
                            <PopoverMenuItem>
                                <MessageCircle size={14} />
                                <span>Start conversation</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <PhoneCall size={14} />
                                <span>Audio call</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <Video size={14} />
                                <span>Video call</span>
                            </PopoverMenuItem>
                        </PopoverMenu>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
