import {
    Plus,
    Filter,
    MessageCircleMore,
    Archive,
    AlertCircle,
} from "lucide-react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
} from "./ui/Popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/Tooltip";

export default function Side() {
    return (
        <div className="h-full w-72 border-r border-r-neutral-200">
            <div className="py-6 px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Chats</h1>
                    <div className="flex items-center space-x-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-neutral-100"
                                >
                                    <Plus size={16} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>Add contact</TooltipContent>
                        </Tooltip>
                        <Popover placement="bottom-end">
                            <PopoverTrigger asChild>
                                <button
                                    type="button"
                                    className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-neutral-100 [&[data-state=open]]:bg-blue-500 [&[data-state=open]]:text-neutral-100"
                                >
                                    <Filter size={16} />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverMenu>
                                    <PopoverMenuItem isActive={true}>
                                        <MessageCircleMore size={16} />
                                        <span>All chats</span>
                                    </PopoverMenuItem>
                                    <PopoverMenuItem>
                                        <Archive size={16} />
                                        <span>Archived chats</span>
                                    </PopoverMenuItem>
                                    <PopoverMenuItem>
                                        <AlertCircle size={16} />
                                        <span>Spam messages</span>
                                    </PopoverMenuItem>
                                </PopoverMenu>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
}
