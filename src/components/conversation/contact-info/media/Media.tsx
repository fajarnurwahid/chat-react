import { useState } from "react";
import TabPane from "./tab-pane/TabPane";
import Image from "./tab-page/image/Image";
import Video from "./tab-page/video/Video";
import File from "./tab-page/file/File";

export type TabType = "image" | "video" | "file";

export default function Media() {
    const [activeTab, setActiveTab] = useState<TabType>("image");

    return (
        <div>
            <TabPane activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "image" && <Image />}
            {activeTab === "video" && <Video />}
            {activeTab === "file" && <File />}
        </div>
    );
}
