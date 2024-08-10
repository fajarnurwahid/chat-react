import { Outlet } from "react-router-dom";
import Conversation from "./Conversation";

export default function ChatLayout() {
    return (
        <>
            <Outlet />
            <Conversation />
        </>
    );
}
