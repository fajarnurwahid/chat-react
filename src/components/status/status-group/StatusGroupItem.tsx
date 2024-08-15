import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../../../contexts/MainContext";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../../ui/Popover";
import { MoreVertical, Forward, Share2, Delete } from "lucide-react";

type StatusGroupItemProps = {
    total: number;
    seen: number;
    username: string;
    image: string;
    name: string;
    time: string;
};

export default function StatusGroupItem({
    total,
    seen,
    username,
    image,
    name,
    time,
}: StatusGroupItemProps) {
    if (total < seen) {
        throw new Error(`'seen' cannot less than 'total'`);
    }

    const circle1Ref = useRef<SVGCircleElement>(null);
    const circle2Ref = useRef<SVGCircleElement>(null);
    const { setUsername } = useMainContext();

    useEffect(() => {
        if (circle1Ref.current) {
            const lengthItem =
                (circle1Ref.current.getTotalLength() - 4 * total) / total;
            let dash = "";
            for (let i = 0; i < 5; i++) {
                if (i < seen) {
                    dash += `0 ${lengthItem + 4} `;
                } else {
                    dash += `${lengthItem} ${total === 1 ? 0 : 4} `;
                }
            }
            circle1Ref.current.style.strokeDasharray = dash;
        }
        if (circle2Ref.current) {
            circle2Ref.current.style.strokeDasharray = `${
                (circle2Ref.current.getTotalLength() - 4 * total) / total
            } ${total === 1 ? 0 : 4}`;
        }
    });

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
                <div className="w-10 h-10 rounded-full flex-shrink-0 relative">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full block object-cover rounded-full"
                    />
                    <svg
                        className="absolute -top-px -left-px"
                        width={43}
                        height={43}
                        viewBox="0 0 43 43"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            ref={circle2Ref}
                            className="stroke-neutral-400 dark:stroke-neutral-600 fill-none"
                            cx={21}
                            cy={21}
                            r={20}
                            strokeWidth={2}
                        />
                        <circle
                            ref={circle1Ref}
                            className="stroke-blue-500 fill-none"
                            cx={21}
                            cy={21}
                            r={20}
                            strokeWidth={2}
                        />
                    </svg>
                </div>
                <div className="min-w-0 w-full">
                    <p className="font-semibold text-sm mb-1">{name}</p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-xs">
                        {time}
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
                            <Forward size={14} />
                            <span>Forward</span>
                        </PopoverMenuItem>
                        <PopoverMenuItem>
                            <Share2 size={14} />
                            <span>Share</span>
                        </PopoverMenuItem>
                        <PopoverMenuItem>
                            <Delete size={14} />
                            <span>Delete</span>
                        </PopoverMenuItem>
                    </PopoverMenu>
                </PopoverContent>
            </Popover>
        </Link>
    );
}
