import {
    Search,
    Video,
    Phone,
    Info,
    MoreVertical,
    Archive,
} from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "./ui/Popover";

export default function ConversationTopbar() {
    return (
        <div className="h-16 flex items-center justify-between space-x-4 px-4 md:px-6">
            <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                    <img
                        src="https://github.com/shadcn.png"
                        alt=""
                        className=" w-full h-full block object-cover rounded-full"
                    />
                    <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute bottom-0 right-0"></div>
                </div>
                <div>
                    <p className="font-medium leading-tight mb-1">Jonathan</p>
                    <p className="text-neutral-500 text-xs">online</p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    type="button"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                >
                    <Search size={18} />
                </button>
                <button
                    type="button"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                >
                    <Video size={18} />
                </button>
                <button
                    type="button"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                >
                    <Phone size={18} />
                </button>
                <button
                    type="button"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                >
                    <Info size={18} />
                </button>
                <Popover placement="bottom-end">
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 [&[data-state=open]]:bg-blue-50 [&[data-state=open]]:text-blue-500"
                        >
                            <MoreVertical size={18} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverMenu className="w-40">
                            <PopoverMenuItem>
                                <Archive size={14} />
                                <span>Archive</span>
                            </PopoverMenuItem>
                        </PopoverMenu>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
