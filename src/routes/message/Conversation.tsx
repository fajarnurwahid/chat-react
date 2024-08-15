import Bottom from "../../components/conversation/bottom/Bottom";
import Topbar from "../../components/conversation/topbar/Topbar";
import ConversationContactInfo from "../../components/conversation/contact-info/ContactInfo";
import Message from "../../components/conversation/message/Message";
import Search from "../../components/conversation/Search";
import {
    ConversationProvider,
    useConversationContext,
} from "../../contexts/ConversationContext";

function ConversationWrapper() {
    const { isSearchOpen, isContactInfoOpen } = useConversationContext();

    return (
        <div className="min-w-0 w-full flex peer-[&.no-conversation]/conversation:hidden peer-[&.no-conversation]/conversation:lg:flex">
            <div className="min-w-0 w-full flex flex-col relative">
                <Topbar />
                {isSearchOpen && <Search />}
                <Message />
                <Bottom />
            </div>
            {isContactInfoOpen && <ConversationContactInfo />}
        </div>
    );
}

export default function Conversation() {
    return (
        <ConversationProvider>
            <ConversationWrapper />
        </ConversationProvider>
    );
}
