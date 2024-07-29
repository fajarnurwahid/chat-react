import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatRoot from "./routes/ChatRoot";
import ChatLayout from "./routes/ChatLayout";
import Chat from "./routes/Chat";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ChatRoot />,
        children: [
            {
                index: true,
                element: <ChatLayout isIndex={true} />,
            },
            {
                path: ":username",
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
