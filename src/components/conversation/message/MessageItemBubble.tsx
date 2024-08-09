import {
    Bookmark,
    Check,
    CheckCheck,
    Delete,
    Forward,
    MoreVertical,
    Reply,
} from "lucide-react";
import { useMessageContext } from "./MessageItem";
import { twMerge } from "tailwind-merge";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../../ui/Popover";
type MessageItemBubbleProps = {
    children: React.ReactNode;
    isRead?: boolean;
    time: string;
};

export default function MessageItemBubble({
    children,
    isRead = false,
    time,
}: MessageItemBubbleProps) {
    const { isMe } = useMessageContext();

    return (
        <div
            className={twMerge(
                "flex items-start group/conversation-item-bubble relative",
                isMe && "justify-end"
            )}
        >
            <div
                className={twMerge(
                    "px-3 pt-3 pb-6 bg-white dark:bg-neutral-800 rounded-lg shadow max-w-lg relative text-neutral-700 dark:text-neutral-300 text-sm leading-normal mr-6",
                    isMe && "bg-blue-100 dark:bg-blue-950 shadow-none mr-0 ml-6"
                )}
            >
                {children}
                <div className="flex items-center absolute right-3 bottom-1 space-x-1">
                    {isRead ? (
                        <CheckCheck
                            size={12}
                            className="text-blue-500 dark:text-blue-400"
                        />
                    ) : (
                        <Check
                            size={12}
                            className="text-neutral-500 dark:text-neutral-400"
                        />
                    )}
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
                        {time}
                    </span>
                </div>
                <Popover placement={isMe ? "bottom-end" : "bottom-start"}>
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            onClick={(e) => e.preventDefault()}
                            className={twMerge(
                                "text-neutral-500 dark:text-neutral-400 flex lg:hidden lg:group-hover/conversation-item-bubble:flex [&[data-state=open]]:flex [&[data-state=open]]:bg-neutral-200 dark:[&[data-state=open]]:bg-neutral-800 [&[data-state=open]]:text-neutral-700 dark:[&[data-state=open]]:text-neutral-300 w-6 h-6 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 items-center justify-center flex-shrink-0 absolute top-0 left-[calc(100%+8px)]",
                                isMe && "left-auto right-[calc(100%+8px)]"
                            )}
                        >
                            <MoreVertical size={14} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverMenu className="w-40">
                            <PopoverMenuItem>
                                <Reply size={14} />
                                <span>Reply</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <Forward size={14} />
                                <span>Forward</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <Bookmark size={14} />
                                <span>Bookmark</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <Delete size={14} />
                                <span>Delete</span>
                            </PopoverMenuItem>
                        </PopoverMenu>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
