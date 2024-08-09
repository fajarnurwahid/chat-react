import { ChevronDown, ChevronUp, X, Search as SearchIcon } from "lucide-react";
import Input from "../ui/Input";
import { useConversationContext } from "../../contexts/ConversationContext";

export default function Search() {
    const { setIsSearchOpen } = useConversationContext();

    return (
        <form className="flex items-center px-4 bg-white dark:bg-neutral-800 border-b border-b-neutral-200 dark:border-b-neutral-700">
            <SearchIcon size={16} className="text-neutral-500 flex-shrink-0" />
            <Input
                type="search"
                className="bg-transparent rounded-none border-none focus:ring-0 h-10 px-3 dark:bg-neutral-800"
                placeholder="Search..."
            />
            <div className="flex space-x-1 flex-shrink-0">
                <button
                    type="button"
                    className="w-6 h-6 rounded flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                    <ChevronUp size={16} />
                </button>
                <button
                    type="button"
                    className="w-6 h-6 rounded flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                    <ChevronDown size={16} />
                </button>
            </div>
            <button
                type="button"
                className="w-6 h-6 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-500/30 ml-2 bg-red-50 dark:bg-red-500/20 text-red-500 dark:text-red-400 hover:dark:text-red-300 rounded-md flex-shrink-0"
                onClick={() => setIsSearchOpen(false)}
            >
                <X size={16} />
            </button>
        </form>
    );
}
