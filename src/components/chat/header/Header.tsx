import {
    Dialog,
    DialogBody,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "../../ui/Dialog";
import {
    Plus,
    X,
    Search,
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
} from "../../ui/Popover";
import ContactItem from "./ContactItem";
import Input from "../../ui/Input";

export default function Header() {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Chats</h1>
            <div className="flex items-center space-x-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            type="button"
                            className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-50 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-neutral-100 dark:hover:text-neutral-100"
                        >
                            <Plus size={16} />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="items-center">
                        <DialogBody className="relative">
                            <DialogClose className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100">
                                <X size={14} />
                            </DialogClose>
                            <div className="p-4">
                                <p className="font-semibold mb-3">
                                    Search Contact
                                </p>
                                <form className="relative">
                                    <Input
                                        type="text"
                                        className="pl-9"
                                        placeholder="Search contact..."
                                    />
                                    <div className="absolute top-0 left-0 w-9 h-9 flex items-center justify-center pointer-events-none text-neutral-500">
                                        <Search size={16} />
                                    </div>
                                </form>
                            </div>
                            <div className="max-h-96 overflow-y-auto pb-4">
                                <ContactItem
                                    image="https://github.com/shadcn.png"
                                    name="Jonathan"
                                    isOnline={true}
                                    status="online"
                                />
                                <ContactItem
                                    image="https://github.com/shadcn.png"
                                    name="John Doe"
                                    status="Last seen 4h ago"
                                />
                                <ContactItem
                                    image="https://github.com/shadcn.png"
                                    name="Jonathan"
                                    isOnline={true}
                                    status="online"
                                />
                                <ContactItem
                                    image="https://github.com/shadcn.png"
                                    name="John Doe"
                                    status="Last seen 4h ago"
                                />
                                <ContactItem
                                    image="https://github.com/shadcn.png"
                                    name="Jonathan"
                                    isOnline={true}
                                    status="online"
                                />
                                <ContactItem
                                    image="https://github.com/shadcn.png"
                                    name="John Doe"
                                    status="Last seen 4h ago"
                                />
                                <ContactItem
                                    image="https://github.com/shadcn.png"
                                    name="Jonathan"
                                    isOnline={true}
                                    status="online"
                                />
                                <ContactItem
                                    image="https://github.com/shadcn.png"
                                    name="John Doe"
                                    status="Last seen 4h ago"
                                />
                            </div>
                        </DialogBody>
                    </DialogContent>
                </Dialog>
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
