import Input from "../ui/Input";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <form className="mt-6">
            <div className="relative">
                <Input type="text" className="pr-10" placeholder="Search..." />
                <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                    <SearchIcon size={16} />
                </button>
            </div>
        </form>
    );
}
