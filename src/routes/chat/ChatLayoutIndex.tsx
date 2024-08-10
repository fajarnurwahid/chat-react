import Chat from "./Chat";
import ConversationIndex from "./ConversationIndex";

export default function ChatLayoutIndex() {
    return (
        <>
            <Chat isIndex={true} />
            <ConversationIndex />
        </>
    );
}
