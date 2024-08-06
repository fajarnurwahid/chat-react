import {
    PhoneCall,
    Video,
    MessageCircle,
    Archive,
    MoreHorizontal,
} from "lucide-react";

import ButtonGroupItem from "./ButtonGroupItem";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../../../ui/Popover";

export default function ButtonGroup() {
    return (
        <div className="flex items-center justify-center space-x-3">
            <ButtonGroupItem>
                <PhoneCall size={16} />
            </ButtonGroupItem>
            <ButtonGroupItem>
                <Video size={16} />
            </ButtonGroupItem>
            <ButtonGroupItem>
                <MessageCircle size={16} />
            </ButtonGroupItem>
            <Popover placement="bottom-end">
                <PopoverTrigger asChild>
                    <ButtonGroupItem>
                        <MoreHorizontal size={16} />
                    </ButtonGroupItem>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverMenu className="w-40">
                        <PopoverMenuItem>
                            <Archive size={14} />
                            <span>Archive</span>
                        </PopoverMenuItem>
                    </PopoverMenu>
                </PopoverContent>
            </Popover>
        </div>
    );
}
