import { Link } from "react-router-dom";
import {
    MessageCircleMore,
    Contact2,
    CircleDot,
    Settings,
    Moon,
} from "lucide-react";
import MenuItem from "./MenuItem";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/Tooltip";

export default function Menu() {
    return (
        <div className="w-full min-w-0 md:h-full md:w-16 border-r border-neutral-200 flex items-center md:flex-col flex-shrink-0 fixed md:static z-10 bottom-0 left-0 border-t border-t-neutral-200 md:border-t-0 bg-white">
            <div className="h-16 hidden md:flex items-center justify-center flex-shrink-0">
                <Link to="/" className="text-3xl font-bold">
                    C
                </Link>
            </div>
            <div className="space-x-3 md:space-x-0 md:space-y-3 flex items-center md:items-stretch md:flex-col md:py-4 px-4 md:px-0 md:h-full md:min-h-0 md:overflow-y-auto w-full h-16 overflow-x-auto md:overflow-x-visible">
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <MenuItem to="/" isActive={true}>
                            <MessageCircleMore size={18} />
                        </MenuItem>
                    </TooltipTrigger>
                    <TooltipContent>Chats</TooltipContent>
                </Tooltip>
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <MenuItem to="/">
                            <CircleDot size={18} />
                        </MenuItem>
                    </TooltipTrigger>
                    <TooltipContent>Status</TooltipContent>
                </Tooltip>
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <MenuItem to="/">
                            <Contact2 size={18} />
                        </MenuItem>
                    </TooltipTrigger>
                    <TooltipContent>Contacts</TooltipContent>
                </Tooltip>
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <MenuItem to="/">
                            <Settings size={18} />
                        </MenuItem>
                    </TooltipTrigger>
                    <TooltipContent>Settings</TooltipContent>
                </Tooltip>
                <div className="md:!mt-auto !ml-auto md:!ml-0 space-x-3 md:space-x-0 md:space-y-3 flex md:flex-col">
                    <MenuItem to="/" className="ml-3 md:!mx-auto md:mt-3">
                        <Moon size={18} />
                    </MenuItem>
                    <Link to="/" className="w-10 h-10 block md:!mx-auto">
                        <img
                            src="https://github.com/shadcn.png"
                            alt=""
                            className="w-full h-full rounded-full"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
