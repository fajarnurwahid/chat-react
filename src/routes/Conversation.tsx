import Bottom from "../components/conversation/Bottom";
import Topbar from "../components/conversation/topbar/Topbar";
import { createContext, useContext, useState } from "react";
import ConversationContactInfo from "../components/conversation/contact-info/ContactInfo";
import Message from "../components/conversation/message/Message";
import Search from "../components/conversation/Search";

type ConversationContextType = {
    isContactInfoOpen: boolean;
    setIsContactInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSearchOpen: boolean;
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ConversationContext = createContext<ConversationContextType>({
    isContactInfoOpen: false,
    setIsContactInfoOpen: () => {},
    isSearchOpen: false,
    setIsSearchOpen: () => {},
});

export default function Conversation() {
    const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <ConversationContext.Provider
            value={{
                isContactInfoOpen,
                setIsContactInfoOpen,
                isSearchOpen,
                setIsSearchOpen,
            }}
        >
            <div className="min-w-0 w-full flex">
                <div className="min-w-0 w-full flex flex-col relative">
                    <Topbar />
                    {isSearchOpen && <Search />}
                    <Message />
                    <Bottom />
                </div>
                {isContactInfoOpen && <ConversationContactInfo />}
            </div>
        </ConversationContext.Provider>
    );
}

export function useConversationContext() {
    const context = useContext(ConversationContext);
    if (!context) {
        throw new Error("Must be wrapped in <Conversation/>");
    }
    return context;
}
