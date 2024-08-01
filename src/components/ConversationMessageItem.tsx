import { Archive, Check, CheckCheck, MoreVertical } from "lucide-react";
import { useContext, createContext } from "react";
import { twMerge } from "tailwind-merge";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "./ui/Popover";

type ConversationMessageContextType = {
    isMe?: boolean;
};
type ConversationMessageItemProps = {
    children: React.ReactNode;
    image: string;
    isMe?: boolean;
};
type ConversationMessageItemBubbleProps = {
    children: React.ReactNode;
    isRead?: boolean;
    time: string;
};

const ConversationMessageContext =
    createContext<ConversationMessageContextType>({
        isMe: false,
    });

export function useConversationMessageContext() {
    const context = useContext(ConversationMessageContext);
    if (!context) {
        throw new Error(
            "useConversationMessageContext must be used within a ConversationMessageContext"
        );
    }
    return context;
}

export default function ConversationMessageItem({
    children,
    image,
    isMe = false,
}: ConversationMessageItemProps) {
    return (
        <ConversationMessageContext.Provider value={{ isMe }}>
            <div
                className={twMerge(
                    "flex items-end md:space-x-2",
                    isMe && "flex-row-reverse space-x-reverse"
                )}
            >
                {!isMe && (
                    <img
                        src={image}
                        alt=""
                        className="w-6 h-6 rounded-full flex-shrink-0 hidden md:block"
                    />
                )}
                <div className="w-full min-w-0 space-y-2">{children}</div>
            </div>
        </ConversationMessageContext.Provider>
    );
}

export function ConversationMessageItemBubble({
    children,
    isRead = false,
    time,
}: ConversationMessageItemBubbleProps) {
    const { isMe } = useConversationMessageContext();

    return (
        <div
            className={twMerge(
                "flex items-start group/conversation-item-bubble relative",
                isMe && "justify-end"
            )}
        >
            <div
                className={twMerge(
                    "px-3 pt-3 pb-6 bg-white rounded-lg shadow max-w-lg relative text-neutral-700 text-sm leading-normal mr-6",
                    isMe && "bg-blue-200 shadow-none mr-0 ml-6"
                )}
            >
                {children}
                <div className="flex items-center absolute right-3 bottom-1 space-x-1">
                    {isRead ? (
                        <CheckCheck size={12} className="text-blue-500" />
                    ) : (
                        <Check size={12} className="text-neutral-500" />
                    )}
                    <span className="text-[10px] text-neutral-500">{time}</span>
                </div>
                <Popover placement={isMe ? "bottom-end" : "bottom-start"}>
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            onClick={(e) => e.preventDefault()}
                            className={twMerge(
                                "text-neutral-500 hidden group-hover/conversation-item-bubble:flex [&[data-state=open]]:flex [&[data-state=open]]:bg-neutral-200 [&[data-state=open]]:text-neutral-700 w-6 h-6 rounded-full hover:bg-neutral-200 items-center justify-center flex-shrink-0 absolute top-0 left-[calc(100%+8px)]",
                                isMe && "left-auto right-[calc(100%+8px)]"
                            )}
                        >
                            <MoreVertical size={14} />
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
            </div>
        </div>
    );
}
