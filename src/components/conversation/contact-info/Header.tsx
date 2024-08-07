import { X } from "lucide-react";
import { useConversationContext } from "../../../contexts/ConversationContext";

export default function Header() {
    const { setIsContactInfoOpen } = useConversationContext();

    return (
        <div className="flex items-center justify-between space-x-4 h-20 px-4 md:px-6 border-b border-b-neutral-200 flex-shrink-0">
            <p className="font-semibold text-sm">Contact Info</p>
            <button type="button" onClick={() => setIsContactInfoOpen(false)}>
                <X size={16} />
            </button>
        </div>
    );
}
