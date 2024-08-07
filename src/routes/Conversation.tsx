import Bottom from "../components/conversation/Bottom";
import Topbar from "../components/conversation/topbar/Topbar";
import ConversationContactInfo from "../components/conversation/contact-info/ContactInfo";
import Message from "../components/conversation/message/Message";
import Search from "../components/conversation/Search";
import {
    ConversationProvider,
    useConversationContext,
} from "../contexts/ConversationContext";

export default function Conversation() {
    const { isSearchOpen, isContactInfoOpen } = useConversationContext();

    return (
        <ConversationProvider>
            <div className="min-w-0 w-full flex">
                <div className="min-w-0 w-full flex flex-col relative">
                    <Topbar />
                    {isSearchOpen && <Search />}
                    <Message />
                    <Bottom />
                </div>
                {isContactInfoOpen && <ConversationContactInfo />}
            </div>
        </ConversationProvider>
    );
}
