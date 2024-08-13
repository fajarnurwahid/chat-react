import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./routes/MainRoot";
import Chat from "./routes/message/Chat";
import Status from "./routes/status/Status";
import Contact from "./routes/message/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                index: true,
                element: <Chat />,
            },
            {
                path: "status/",
                element: <Status />,
            },
            {
                path: "contact/",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
