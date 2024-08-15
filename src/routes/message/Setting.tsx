import { useEffect } from "react";
import { useMainContext } from "../../contexts/MainContext";
import Header from "../../components/setting/Header";
import SettingGroup from "../../components/setting/setting-group/SettingGroup";
import Profile from "../../components/setting/Profile";

export default function Setting() {
    const { setType } = useMainContext();

    useEffect(() => {
        setType("conversation");
    }, []);

    return (
        <div className="h-full w-full lg:w-72 border-r border-r-neutral-200 dark:border-r-neutral-700 flex flex-col lg:flex-shrink-0 bg-white dark:bg-neutral-800 peer/conversation no-conversation">
            <Header />
            <div className="h-full overflow-y-auto min-h-0">
                <Profile />
                <SettingGroup />
            </div>
        </div>
    );
}
