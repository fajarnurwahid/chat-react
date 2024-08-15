import { twMerge } from "tailwind-merge";
import Header from "../../components/chat/header/Header";
import ChatGroup from "../../components/chat/chat-group/ChatGroup";
import { useMainContext } from "../../contexts/MainContext";
import { useEffect } from "react";

export default function Chat() {
    const { username, setType } = useMainContext();

    useEffect(() => {
        setType("conversation");
    }, []);

    return (
        <div
            className={twMerge(
                "h-full w-full lg:w-72 border-r border-r-neutral-200 dark:border-r-neutral-700 flex flex-col lg:flex-shrink-0 bg-white dark:bg-neutral-800",
                username && "hidden lg:flex"
            )}
        >
            <Header />
            <ChatGroup />
        </div>
    );
}
