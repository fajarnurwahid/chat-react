import { ArrowLeft } from "lucide-react";
import Profile from "./Profile";
import ButtonGroup from "./button-group/ButtonGroup";
import { useMainContext } from "../../../contexts/MainContext";

export default function Topbar() {
    const { setUsername } = useMainContext();

    return (
        <div className="h-20 flex items-center px-4 md:px-6 border-b border-b-neutral-200 dark:border-b-neutral-700 bg-white dark:bg-neutral-800 flex-shrink-0">
            <button
                type="button"
                className="mr-3 lg:hidden"
                onClick={() => setUsername(null)}
            >
                <ArrowLeft size={16} />
            </button>
            <Profile />
            <ButtonGroup />
        </div>
    );
}
