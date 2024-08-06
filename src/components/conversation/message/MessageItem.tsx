import { useContext, createContext } from "react";
import { twMerge } from "tailwind-merge";

type MessageContextType = {
    isMe?: boolean;
};
type MessageItemProps = {
    children: React.ReactNode;
    image: string;
    isMe?: boolean;
};

const MessageContext = createContext<MessageContextType>({
    isMe: false,
});

export function useMessageContext() {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error(
            "useMessageContext must be used within a MessageContext"
        );
    }
    return context;
}

export default function MessageItem({
    children,
    image,
    isMe = false,
}: MessageItemProps) {
    return (
        <MessageContext.Provider value={{ isMe }}>
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
        </MessageContext.Provider>
    );
}
