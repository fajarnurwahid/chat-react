import Profile from "./Profile";
import ButtonGroup from "./button-group/ButtonGroup";

export default function Topbar() {
    return (
        <div className="h-20 flex items-center justify-between space-x-3 px-4 md:px-6 border-b border-b-neutral-200 flex-shrink-0">
            <Profile />
            <ButtonGroup />
        </div>
    );
}
