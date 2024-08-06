import { TabType } from "../Media";
import TabPaneItem from "./TabPaneItem";

type TabPaneProps = {
    activeTab: TabType;
    setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
};

export default function TabPane({ activeTab, setActiveTab }: TabPaneProps) {
    return (
        <div className="bg-neutral-100 rounded-lg p-1 flex items-center space-x-1 mb-2">
            <TabPaneItem
                onClick={() => setActiveTab("image")}
                isActive={activeTab === "image"}
            >
                Images
            </TabPaneItem>
            <TabPaneItem
                onClick={() => setActiveTab("video")}
                isActive={activeTab === "video"}
            >
                Videos
            </TabPaneItem>
            <TabPaneItem
                onClick={() => setActiveTab("file")}
                isActive={activeTab === "file"}
            >
                File
            </TabPaneItem>
        </div>
    );
}
