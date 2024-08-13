import { useMainContext } from "../contexts/MainContext";
import { Outlet } from "react-router-dom";
import Menu from "../components/menu/Menu";
import { ThemeProvider } from "../contexts/ThemeContext";
import { MainContextProvider } from "../contexts/MainContext";
import Conversation from "./message/Conversation";
import ConversationIndex from "./message/ConversationIndex";
import StatusViewIndex from "./status/StatusViewIndex";
import StatusView from "./status/StatusView";

function MainRootWrapper() {
    const { username, type } = useMainContext();
    return (
        <>
            {!username && type === "conversation" && <ConversationIndex />}
            {username && type === "conversation" && <Conversation />}
            {!username && type === "status" && <StatusViewIndex />}
            {username && type === "status" && <StatusView />}
        </>
    );
}

export default function MainRoot() {
    return (
        <MainContextProvider>
            <ThemeProvider>
                <div className="flex h-screen pb-16 md:pb-0">
                    <Menu />
                    <Outlet />
                    <MainRootWrapper />
                </div>
            </ThemeProvider>
        </MainContextProvider>
    );
}
