import Header from "./Header";
import Profile from "./Profile";
import ButtonGroup from "./button-group/ButtonGroup";
import Info from "./Info";
import Media from "./media/Media";

export default function ContactInfo() {
    return (
        <div className="flex-shrink-0 w-full md:w-72 border-l border-l-neutral-200 flex flex-col fixed md:static top-0 left-0 bottom-16 bg-white">
            <Header />
            <div className="px-4 md:px-6 py-4 overflow-y-auto min-h-0 h-full">
                <Profile />
                <ButtonGroup />
                <hr className="my-4 border-neutral-200" />
                <Info />
                <hr className="my-4 border-neutral-200" />
                <Media />
            </div>
        </div>
    );
}
