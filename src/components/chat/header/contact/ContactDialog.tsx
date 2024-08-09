import {
    Dialog,
    DialogBody,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "../../../ui/Dialog";
import { Plus, X, Search } from "lucide-react";
import ContactItem from "./ContactItem";
import Input from "../../../ui/Input";

export default function ContactDialog() {
    return (
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
                    <DialogClose className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-md text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                        <X size={14} />
                    </DialogClose>
                    <div className="p-4">
                        <p className="font-semibold mb-3">Search Contact</p>
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
    );
}
