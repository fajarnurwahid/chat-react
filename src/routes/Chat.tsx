import {
    Plus,
    Filter,
    MessageCircleMore,
    Archive,
    AlertCircle,
    Search,
} from "lucide-react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
} from "../components/ui/Popover";
import Input from "../components/ui/Input";
import ChatItem from "../components/ChatItem";
import { twMerge } from "tailwind-merge";
import {
    Dialog,
    DialogBody,
    DialogContent,
    DialogTrigger,
} from "../components/ui/Dialog";

type ChatProps = {
    isIndex?: boolean;
};

export default function Chat({ isIndex = false }: ChatProps) {
    return (
        <div
            className={twMerge(
                "h-full w-full md:w-72 border-r border-r-neutral-200 flex flex-col flex-shrink-0",
                !isIndex && "hidden md:block"
            )}
        >
            <div className="pt-6 pb-4 px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Chats</h1>
                    <div className="flex items-center space-x-2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button
                                    type="button"
                                    className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-neutral-100"
                                >
                                    <Plus size={16} />
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogBody>
                                    <div className="p-4">
                                        <p className="font-semibold mb-3">
                                            Search by Name
                                        </p>
                                        <form>
                                            <Input type="text" />
                                        </form>
                                    </div>
                                </DialogBody>
                            </DialogContent>
                        </Dialog>
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
                <form className="mt-6">
                    <div className="relative">
                        <Input
                            type="text"
                            className="pr-10"
                            placeholder="Search..."
                        />
                        <button
                            type="submit"
                            className="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-neutral-700"
                        >
                            <Search size={16} />
                        </button>
                    </div>
                </form>
            </div>
            <div className="overflow-y-auto min-h-0 h-full">
                <ChatItem
                    to="/jonathan"
                    image="https://github.com/shadcn.png"
                    name="Jonathan"
                    lastMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, vero!"
                    time="10:00 AM"
                    unRead={5}
                />
                <ChatItem
                    to="/johndoe"
                    image="https://github.com/shadcn.png"
                    name="John Doe"
                    lastMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, vero!"
                    time="10:00 AM"
                    isOnline={true}
                />
            </div>
        </div>
    );
}
