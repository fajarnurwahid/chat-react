import { useConversationContext } from "../../../../contexts/ConversationContext";
import {
    Search,
    Video,
    Phone,
    Info,
    MoreVertical,
    Archive,
    BellOff,
    CircleOff,
} from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../../../ui/Popover";
import ButtonGroupItem from "./ButtonGroupItem";

export default function ButtonGroup() {
    const { setIsContactInfoOpen, setIsSearchOpen } = useConversationContext();

    return (
        <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
            <ButtonGroupItem onClick={() => setIsSearchOpen((prev) => !prev)}>
                <Search size={18} />
            </ButtonGroupItem>
            <ButtonGroupItem>
                <Video size={18} />
            </ButtonGroupItem>
            <ButtonGroupItem>
                <Phone size={18} />
            </ButtonGroupItem>
            <ButtonGroupItem
                onClick={() => setIsContactInfoOpen((prev) => !prev)}
            >
                <Info size={18} />
            </ButtonGroupItem>
            <Popover placement="bottom-end">
                <PopoverTrigger asChild>
                    <ButtonGroupItem>
                        <MoreVertical size={18} />
                    </ButtonGroupItem>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverMenu className="w-40">
                        <PopoverMenuItem>
                            <Archive size={14} />
                            <span>Archive</span>
                        </PopoverMenuItem>
                        <PopoverMenuItem>
                            <BellOff size={14} />
                            <span>Muted</span>
                        </PopoverMenuItem>
                        <PopoverMenuItem>
                            <CircleOff size={14} />
                            <span>Block</span>
                        </PopoverMenuItem>
                    </PopoverMenu>
                </PopoverContent>
            </Popover>
        </div>
    );
}
