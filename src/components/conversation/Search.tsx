import { ChevronDown, ChevronUp, X, Search as SearchIcon } from "lucide-react";
import Input from "../ui/Input";
import { useConversationContext } from "../../routes/Conversation";

export default function Search() {
    const { setIsSearchOpen } = useConversationContext();

    return (
        <form className="flex items-center px-4 bg-white border-b border-b-neutral-200">
            <SearchIcon size={16} className="text-neutral-500 flex-shrink-0" />
            <Input
                type="search"
                className="bg-transparent rounded-none border-none focus:ring-0 h-10 px-3"
                placeholder="Search..."
            />
            <div className="flex space-x-1 flex-shrink-0">
                <button
                    type="button"
                    className="w-6 h-6 rounded flex items-center justify-center hover:bg-neutral-100 text-neutral-500 hover:text-neutral-700"
                >
                    <ChevronUp size={16} />
                </button>
                <button
                    type="button"
                    className="w-6 h-6 rounded flex items-center justify-center hover:bg-neutral-100 text-neutral-500 hover:text-neutral-700"
                >
                    <ChevronDown size={16} />
                </button>
            </div>
            <button
                type="button"
                className="w-6 h-6 flex items-center justify-center hover:bg-red-100 ml-2 bg-red-50 text-red-500 rounded-md flex-shrink-0"
                onClick={() => setIsSearchOpen(false)}
            >
                <X size={16} />
            </button>
        </form>
    );
}
