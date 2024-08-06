export default function Profile() {
    return (
        <div
            className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/75 before:to-transparent rounded-lg overflow-hidden mb-4"
            data-fancybox="profile"
            data-src="https://github.com/shadcn.png"
        >
            <img
                src="https://github.com/shadcn.png"
                alt=""
                className="w-full h-40 object-cover block"
            />
            <div className="absolute bottom-3 left-3">
                <p className="text-neutral-100 font-semibold mb-1">Jonathan</p>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></div>
                    <p className="text-neutral-300 text-xs">online</p>
                </div>
            </div>
        </div>
    );
}
