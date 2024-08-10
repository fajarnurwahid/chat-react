import { Outlet } from "react-router-dom";
import Menu from "../components/menu/Menu";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function MainRoot() {
    return (
        <ThemeProvider>
            <div className="flex h-screen pb-16 md:pb-0">
                <Menu />
                <Outlet />
            </div>
        </ThemeProvider>
    );
}
