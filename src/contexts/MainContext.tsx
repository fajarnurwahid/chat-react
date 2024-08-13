import { createContext, useContext, useState } from "react";

type MainContextTypeType = "conversation" | "status";
type MainContextType = {
    username: string | null;
    setUsername: React.Dispatch<React.SetStateAction<string | null>>;
    type?: MainContextTypeType;
    setType: React.Dispatch<React.SetStateAction<MainContextTypeType>>;
};

const MainContext = createContext<MainContextType | null>(null);

export function MainContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [type, setType] = useState<MainContextTypeType>("conversation");
    const [username, setUsername] = useState<string | null>(null);

    return (
        <MainContext.Provider
            value={{
                username,
                setUsername,
                type,
                setType,
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export function useMainContext() {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error("Must be wrapped in <MainContextProvider/>");
    }
    return context;
}
