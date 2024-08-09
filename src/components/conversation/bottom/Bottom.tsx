import {
    MoreHorizontal,
    Mic,
    Send,
    FilePlus,
    Camera,
    Image,
    Contact2,
    MapPin,
} from "lucide-react";
import Input from "../../ui/Input";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../../ui/Popover";
import EmojiPicker from "./EmojiPicker";
import { useRef } from "react";

export default function Bottom() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="flex items-center space-x-2 md:space-x-3 h-16 bg-white dark:bg-neutral-800 border-t border-t-neutral-200 dark:border-t-neutral-700 flex-shrink-0 px-4">
            <div className="flex md:space-x-1">
                <Popover placement="top-start">
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            className="w-9 h-9 rounded-full hidden md:flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100 flex-shrink-0 [&[data-state=open]]:bg-neutral-100 dark:[&[data-state=open]]:bg-neutral-900 [&[data-state=open]]:text-neutral-900 dark:[&[data-state=open]]:text-neutral-100"
                        >
                            <MoreHorizontal size={16} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverMenu className="w-40">
                            <PopoverMenuItem>
                                <FilePlus size={14} />
                                <span>Document</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <Camera size={14} />
                                <span>Camera</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <Image size={14} />
                                <span>Gallery</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <Contact2 size={14} />
                                <span>Contact</span>
                            </PopoverMenuItem>
                            <PopoverMenuItem>
                                <MapPin size={14} />
                                <span>Location</span>
                            </PopoverMenuItem>
                        </PopoverMenu>
                    </PopoverContent>
                </Popover>
                <EmojiPicker inputRef={inputRef} />
            </div>
            <Input ref={inputRef} type="text" placeholder="Type here..." />
            <div className="flex space-x-2">
                <button
                    type="button"
                    className="w-9 h-9 rounded-full hidden md:flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100 flex-shrink-0"
                >
                    <Mic size={16} />
                </button>
                <button
                    type="button"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-100 bg-blue-500 flex-shrink-0"
                >
                    <Send size={16} />
                </button>
            </div>
        </form>
    );
}
