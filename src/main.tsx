import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./routes/MainRoot";
import ChatLayout from "./routes/chat/ChatLayout";
import Chat from "./routes/chat/Chat";
import ChatLayoutIndex from "./routes/chat/ChatLayoutIndex";
import StatusLayout from "./routes/status/StatusLayout";
import Status from "./routes/status/Status";
import StatusLayoutIndex from "./routes/status/StatusLayoutIndex";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                index: true,
                element: <ChatLayoutIndex />,
            },
            {
                path: "status/",
                children: [
                    {
                        index: true,
                        element: <StatusLayoutIndex />,
                    },
                    {
                        path: ":username/",
                        element: <StatusLayout />,
                        children: [
                            {
                                index: true,
                                element: <Status />,
                            },
                        ],
                    },
                ],
            },
            {
                path: ":username/",
                element: <ChatLayout />,
                children: [
                    {
                        index: true,
                        element: <Chat />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
