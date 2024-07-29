import { Outlet } from "react-router-dom";
import Conversation from "./Conversation";
import Chat from "./Chat";
import ConversationIndex from "./ConversationIndex";

type ChatLayoutProps = {
    isIndex?: boolean;
};

export default function ChatLayout({ isIndex = false }: ChatLayoutProps) {
    if (isIndex) {
        return (
            <>
                <Chat isIndex={isIndex} />
                <ConversationIndex />
            </>
        );
    }
    return (
        <>
            <Outlet />
            <Conversation />
        </>
    );
}
