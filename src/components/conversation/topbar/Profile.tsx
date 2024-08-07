export default function Profile() {
    return (
        <div className="flex items-center space-x-3 min-w-0 w-full">
            <div className="relative w-10 h-10 flex-shrink-0">
                <img
                    src="https://github.com/shadcn.png"
                    alt=""
                    className="w-full h-full block object-cover rounded-full"
                />
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-neutral-800 absolute bottom-0 right-0"></div>
            </div>
            <div className="min-w-0 w-full">
                <p className="font-medium leading-tight mb-1 truncate">
                    Jonathan
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs truncate">
                    online
                </p>
            </div>
        </div>
    );
}
