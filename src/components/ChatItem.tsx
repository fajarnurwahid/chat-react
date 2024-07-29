import { Link, LinkProps } from "react-router-dom";
import { Check, CheckCheck, ChevronDown, Archive } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "./ui/Popover";

type ChatItemProps = LinkProps & {
    image: string;
    name: string;
    lastMessage: string;
    time: string;
    isRead?: boolean;
    isOnline?: boolean;
};

export default function ChatItem({
    image,
    name,
    lastMessage,
    time,
    isRead = false,
    isOnline = false,
    ...props
}: ChatItemProps) {
    return (
        <Link
            className="px-4 md:px-6 h-16 hover:bg-neutral-100 flex items-center space-x-3"
            {...props}
        >
            <div className="relative flex-shrink-0">
                <img
                    src={image}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover block"
                />
                {isOnline && (
                    <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></div>
                )}
            </div>
            <span className="min-w-0 w-full">
                <span className="flex items-center justify-between space-x-2 mb-1">
                    <p className="font-medium truncate text-sm">{name}</p>
                    <span className="text-xs text-neutral-500">{time}</span>
                </span>
                <span className="flex items-center justify-between space-x-2">
                    <p className="text-xs flex items-center space-x-1 min-w-0">
                        {isRead ? (
                            <CheckCheck
                                size={12}
                                className="flex-shrink-0 text-blue-500"
                            />
                        ) : (
                            <Check size={12} className="flex-shrink-0" />
                        )}
                        <span className="text-neutral-500 min-w-0 truncate">
                            {lastMessage}
                        </span>
                    </p>
                    <Popover placement="bottom-end">
                        <PopoverTrigger asChild>
                            <button
                                type="button"
                                onClick={(e) => e.preventDefault()}
                                className="text-neutral-500"
                            >
                                <ChevronDown size={16} />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverMenu className="w-40">
                                <PopoverMenuItem>
                                    <Archive size={14} />
                                    <span>Archive chat</span>
                                </PopoverMenuItem>
                            </PopoverMenu>
                        </PopoverContent>
                    </Popover>
                </span>
            </span>
        </Link>
    );
}
