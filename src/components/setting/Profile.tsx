import { Camera } from "lucide-react";

export default function Profile() {
    return (
        <div className="py-6 px-4 md:px-6 border-b border-b-neutral-200 dark:border-b-neutral-700">
            <div className="relative w-16 h-16 mx-auto mb-4">
                <img
                    src="https://github.com/shadcn.png"
                    alt=""
                    className="w-full h-full rounded-lg object-cover"
                />
                <button
                    type="button"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-neutral-100 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-200 shadow-md"
                >
                    <Camera size={14} />
                </button>
            </div>
            <h1 className="text-base font-medium text-center mb-1">Jonathan</h1>
            <p className="text-center text-xs text-neutral-500">@jonathan</p>
        </div>
    );
}
