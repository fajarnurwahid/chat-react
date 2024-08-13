import {
    Check,
    CheckCheck,
    ChevronDown,
    Archive,
    BellOff,
    Delete,
} from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../../ui/Popover";
import { twMerge } from "tailwind-merge";
import { useMainContext } from "../../../contexts/MainContext";
import { Link } from "react-router-dom";

type ChatGroupItemProps = {
    username: string;
    image: string;
    name: string;
    lastMessage: string;
    time: string;
    unRead?: number;
    isOnline?: boolean;
};

export default function ChatGroupItem({
    username,
    image,
    name,
    lastMessage,
    time,
    unRead = 0,
    isOnline = false,
}: ChatGroupItemProps) {
    const { setUsername } = useMainContext();

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        setUsername(username);
    }

    return (
        <Link
            to="#"
            className="px-4 md:px-6 h-16 hover:bg-neutral-100 dark:hover:bg-neutral-900 flex items-center w-full space-x-3 group/chat-item"
            onClick={handleClick}
        >
            <div className="relative flex-shrink-0">
                <img
                    src={image}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover block"
                />
                {isOnline && (
                    <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-neutral-800 absolute bottom-0 right-0"></div>
                )}
            </div>
            <span className="min-w-0 w-full">
                <span className="flex items-center justify-between space-x-2 mb-1">
                    <p
                        className={twMerge(
                            "font-medium truncate text-sm",
                            unRead > 0 && "font-semibold"
                        )}
                    >
                        {name}
                    </p>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {time}
                    </span>
                </span>
                <span className="flex items-center justify-between space-x-2">
                    <p className="text-xs flex items-center space-x-1 min-w-0">
                        {unRead > 0 ? (
                            <Check size={12} className="flex-shrink-0" />
                        ) : (
                            <CheckCheck
                                size={12}
                                className="flex-shrink-0 text-blue-500 dark:text-blue-400"
                            />
                        )}
                        <span
                            className={twMerge(
                                "text-neutral-500 min-w-0 truncate",
                                unRead > 0 &&
                                    "font-medium text-neutral-700 dark:text-neutral-300"
                            )}
                        >
                            {lastMessage}
                        </span>
                    </p>
                    <div className="flex items-center space-x-1">
                        {unRead > 0 && (
                            <div className="min-w-4 h-4 px-1 rounded-full flex items-center justify-center text-xs bg-blue-500 text-neutral-100 font-semibold">
                                {unRead < 100 ? unRead : "99+"}
                            </div>
                        )}
                        <Popover placement="bottom-end">
                            <PopoverTrigger asChild>
                                <button
                                    type="button"
                                    onClick={(e) => e.preventDefault()}
                                    className="text-neutral-500 dark:text-neutral-400 lg:hidden lg:group-hover/chat-item:block [&[data-state=open]]:block"
                                >
                                    <ChevronDown size={16} />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverMenu className="w-40">
                                    <PopoverMenuItem>
                                        <Archive size={14} />
                                        <span>Archive</span>
                                    </PopoverMenuItem>
                                    <PopoverMenuItem>
                                        <BellOff size={14} />
                                        <span>Mute</span>
                                    </PopoverMenuItem>
                                    <PopoverMenuItem>
                                        <Delete size={14} />
                                        <span>Delete</span>
                                    </PopoverMenuItem>
                                </PopoverMenu>
                            </PopoverContent>
                        </Popover>
                    </div>
                </span>
            </span>
        </Link>
    );
}
