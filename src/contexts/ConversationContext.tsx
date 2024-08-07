import { createContext, useContext, useState } from "react";

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

export function ConversationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
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
            {children}
        </ConversationContext.Provider>
    );
}

export function useConversationContext() {
    const context = useContext(ConversationContext);
    if (!context) {
        throw new Error("Must be wrapped in <ConversationProvider/>");
    }
    return context;
}
