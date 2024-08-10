import { Outlet } from "react-router-dom";
import StatusView from "./StatusView";

export default function StatusLayout() {
    return (
        <>
            <Outlet />
            <StatusView />
        </>
    );
}
