import Header from "./Header";
import Profile from "./Profile";
import ButtonGroup from "./button-group/ButtonGroup";
import Info from "./Info";
import Media from "./media/Media";

export default function ContactInfo() {
    return (
        <div className="flex-shrink-0 w-full md:w-72 border-l border-l-neutral-200 dark:border-l-neutral-700 flex flex-col fixed md:static top-0 left-0 bottom-16 bg-white dark:bg-neutral-800">
            <Header />
            <div className="px-4 md:px-6 py-4 overflow-y-auto min-h-0 h-full">
                <Profile />
                <ButtonGroup />
                <hr className="my-4 border-neutral-200 dark:border-neutral-700" />
                <Info />
                <hr className="my-4 border-neutral-200 dark:border-neutral-700" />
                <Media />
            </div>
        </div>
    );
}
