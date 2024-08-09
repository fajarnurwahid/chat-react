import { Filter, MessageCircleMore, Archive, AlertCircle } from "lucide-react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
} from "../../ui/Popover";
import ContactDialog from "./contact/ContactDialog";

export default function Header() {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Chats</h1>
            <div className="flex items-center space-x-2">
                <ContactDialog />
                <Popover placement="bottom-end">
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-50 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-neutral-100 dark:hover:text-neutral-100 [&[data-state=open]]:bg-blue-500 dark:[&[data-state=open]]:bg-blue-500 [&[data-state=open]]:text-neutral-100 dark:[&[data-state=open]]:text-neutral-100"
                        >
                            <Filter size={16} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverMenu>
                            <PopoverMenuItem isActive={true}>
                                <MessageCircleMore size={14} />
                                <span>All chats</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <Archive size={14} />
                                <span>Archived chats</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <AlertCircle size={14} />
                                <span>Spam messages</span>
                            </PopoverMenuItem>
                        </PopoverMenu>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
