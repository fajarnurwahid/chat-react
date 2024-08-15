import { Edit2 } from "lucide-react";

export default function Header() {
    return (
        <div className="px-4 lg:px-6 flex-shrink-0 border-b border-b-neutral-200 dark:border-b-neutral-700 flex items-center h-20">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-xl font-semibold">Setting</h1>
                <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-50 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-neutral-100 dark:hover:text-neutral-100"
                    >
                        <Edit2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
