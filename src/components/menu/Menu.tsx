import { Link, matchPath, useLocation } from "react-router-dom";
import {
    MessageCircleMore,
    Contact2,
    CircleDot,
    Settings,
    Moon,
    User2,
    LogOut,
    Sun,
} from "lucide-react";
import MenuItem from "./MenuItem";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/Tooltip";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../ui/Popover";
import useThemeContext from "../../contexts/ThemeContext";
import { useMainContext } from "../../contexts/MainContext";

export default function Menu() {
    const { theme, setTheme } = useThemeContext();
    const location = useLocation();
    const { setType, setUsername, username, type } = useMainContext();

    return (
        <div className="w-full md:min-w-0 md:h-full md:w-16 md:border-r md:border-r-neutral-200 dark:md:border-r-neutral-700 flex items-center md:flex-col md:flex-shrink-0 fixed md:static z-10 bottom-0 left-0 border-t border-t-neutral-200 dark:border-t-neutral-700 md:border-t-0 bg-white dark:bg-neutral-800">
            <div className="h-16 hidden md:flex items-center justify-center flex-shrink-0">
                <Link to="/" className="text-3xl font-bold">
                    C
                </Link>
            </div>
            <div className="space-x-3 md:space-x-0 md:space-y-3 flex items-center md:items-stretch md:flex-col md:py-4 px-4 md:px-0 md:h-full md:min-h-0 md:overflow-y-auto w-full h-16 overflow-x-auto md:overflow-x-visible">
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <MenuItem
                            to="/"
                            isActive={Boolean(
                                matchPath(
                                    {
                                        path: "/",
                                        end: true,
                                    },
                                    location.pathname
                                )
                            )}
                            onClick={() => {
                                setUsername(null);
                                setType("conversation");
                            }}
                        >
                            <MessageCircleMore size={18} />
                        </MenuItem>
                    </TooltipTrigger>
                    <TooltipContent>Chats</TooltipContent>
                </Tooltip>
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <MenuItem
                            to="/status"
                            isActive={Boolean(
                                matchPath(
                                    {
                                        path: "/status",
                                        end: true,
                                    },
                                    location.pathname
                                )
                            )}
                            onClick={() => {
                                setUsername(null);
                                setType("status");
                            }}
                        >
                            <CircleDot size={18} />
                        </MenuItem>
                    </TooltipTrigger>
                    <TooltipContent>Status</TooltipContent>
                </Tooltip>
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <MenuItem
                            to="/contact/"
                            isActive={Boolean(
                                matchPath(
                                    {
                                        path: "/contact",
                                        end: true,
                                    },
                                    location.pathname
                                )
                            )}
                            onClick={() => {
                                if (type !== "conversation" && username) {
                                    setUsername(null);
                                }
                                setType("conversation");
                            }}
                        >
                            <Contact2 size={18} />
                        </MenuItem>
                    </TooltipTrigger>
                    <TooltipContent>Contacts</TooltipContent>
                </Tooltip>
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <MenuItem
                            to="/setting/"
                            isActive={Boolean(
                                matchPath(
                                    {
                                        path: "/setting",
                                        end: true,
                                    },
                                    location.pathname
                                )
                            )}
                            onClick={() => {
                                if (type !== "conversation" && username) {
                                    setUsername(null);
                                }
                                setType("conversation");
                            }}
                        >
                            <Settings size={18} />
                        </MenuItem>
                    </TooltipTrigger>
                    <TooltipContent>Settings</TooltipContent>
                </Tooltip>
                <div className="md:!mt-auto !ml-auto md:!ml-0 space-x-3 md:space-x-0 md:space-y-3 flex md:flex-col">
                    <Tooltip placement="right">
                        <TooltipTrigger asChild>
                            <MenuItem
                                to="/"
                                className="ml-3 md:!mx-auto md:mt-3"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setTheme(
                                        theme === "light" ? "dark" : "light"
                                    );
                                }}
                            >
                                {theme === "light" ? (
                                    <Moon size={18} />
                                ) : (
                                    <Sun size={18} />
                                )}
                            </MenuItem>
                        </TooltipTrigger>
                        <TooltipContent>
                            {theme === "light" ? "Dark mode" : "Light mode"}
                        </TooltipContent>
                    </Tooltip>
                    <Popover placement="top-start">
                        <PopoverTrigger asChild>
                            <button
                                type="button"
                                className="w-10 h-10 block md:!mx-auto"
                            >
                                <img
                                    src="https://github.com/shadcn.png"
                                    alt=""
                                    className="w-full h-full rounded-full"
                                />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverMenu className="w-40">
                                <PopoverMenuItem>
                                    <User2 size={14} />
                                    <span>Profile</span>
                                </PopoverMenuItem>
                                <PopoverMenuItem>
                                    <Settings size={14} />
                                    <span>Settings</span>
                                </PopoverMenuItem>
                                <PopoverMenuItem>
                                    <LogOut size={14} />
                                    <span>Log out</span>
                                </PopoverMenuItem>
                            </PopoverMenu>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}
