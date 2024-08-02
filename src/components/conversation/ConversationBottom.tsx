import { MoreHorizontal, Smile, Mic, Send } from "lucide-react";
import Input from "../ui/Input";

export default function ConversationBottom() {
    return (
        <form className="flex items-center space-x-2 md:space-x-3 h-16 bg-white border-t border-t-neutral-200 flex-shrink-0 px-4">
            <div className="flex md:space-x-1">
                <button
                    type="button"
                    className="w-9 h-9 rounded-full hidden md:flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 flex-shrink-0"
                >
                    <MoreHorizontal size={16} />
                </button>
                <button
                    type="button"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 flex-shrink-0"
                >
                    <Smile size={16} />
                </button>
            </div>
            <Input type="text" placeholder="Type here..." />
            <div className="flex space-x-2">
                <button
                    type="button"
                    className="w-9 h-9 rounded-full hidden md:flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 flex-shrink-0"
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
