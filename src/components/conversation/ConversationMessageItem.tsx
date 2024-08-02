import { useContext, createContext } from "react";
import { twMerge } from "tailwind-merge";

type ConversationMessageContextType = {
    isMe?: boolean;
};
type ConversationMessageItemProps = {
    children: React.ReactNode;
    image: string;
    isMe?: boolean;
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
