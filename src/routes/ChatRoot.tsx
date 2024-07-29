import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function ChatRoot() {
    return (
        <div className="flex h-screen pb-16 md:pb-0">
            <Menu />
            <Outlet />
        </div>
    );
}
