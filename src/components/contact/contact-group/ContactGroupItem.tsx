import { Link } from "react-router-dom";
import { useMainContext } from "../../../contexts/MainContext";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../../ui/Popover";
import { MoreVertical, MessageCircleMore, Phone, Video } from "lucide-react";

type ContactGroupItemProps = {
    username: string;
    image: string;
    name: string;
};

export default function ContactGroupItem({
    username,
    image,
    name,
}: ContactGroupItemProps) {
    const { setUsername } = useMainContext();

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        setUsername(username);
    }

    return (
        <Link
            to="#"
            className="flex items-center justify-between h-16 px-4 md:px-6 hover:bg-neutral-100 dark:hover:bg-neutral-900 group/status-group-item"
            onClick={handleClick}
        >
            <div className="flex space-x-3">
                <img
                    src={image}
                    alt=""
                    className="w-10 h-10 flex-shrink-0 block object-cover rounded-full"
                />
                <div className="min-w-0 w-full">
                    <p className="font-semibold text-sm mb-1">{name}</p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-xs">
                        @{username}
                    </p>
                </div>
            </div>
            <Popover placement="bottom-end">
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        className="w-7 h-7 hidden group-hover/status-group-item:flex items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-950 [&[data-state=open]]:bg-neutral-200 dark:[&[data-state=open]]:bg-neutral-950 [&[data-state=open]]:text-neutral-700 dark:[&[data-state=open]]:text-neutral-300 [&[data-state=open]]:flex"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        <MoreVertical size={16} />
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverMenu>
                        <PopoverMenuItem>
                            <Phone size={14} />
                            <span>Voice call</span>
                        </PopoverMenuItem>
                        <PopoverMenuItem>
                            <Video size={14} />
                            <span>Video call</span>
                        </PopoverMenuItem>
                        <PopoverMenuItem>
                            <MessageCircleMore size={14} />
                            <span>Chat</span>
                        </PopoverMenuItem>
                    </PopoverMenu>
                </PopoverContent>
            </Popover>
        </Link>
    );
}
