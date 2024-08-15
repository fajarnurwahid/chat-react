import { User2 } from "lucide-react";
import SettingGroupItem from "./SettingGroupItem";

export default function SettingGroup() {
    return (
        <div className="divide-y divide-neutral-200">
            <SettingGroupItem
                title="Personal Info"
                icon={<User2 size={16} className="text-neutral-500" />}
                defaultOpen={true}
            >
                <div className="space-y-4">
                    <div>
                        <p className="text-neutral-700 dark:text-neutral-300 text-xs uppercase font-medium mb-2">
                            Bio
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consequatur, sapiente.
                        </p>
                    </div>
                    <div>
                        <p className="text-neutral-700 dark:text-neutral-300 text-xs uppercase font-medium mb-2">
                            Name
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Jonathan
                        </p>
                    </div>
                    <div>
                        <p className="text-neutral-700 dark:text-neutral-300 text-xs uppercase font-medium mb-2">
                            Location
                        </p>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Location, Location
                        </p>
                    </div>
                </div>
            </SettingGroupItem>
        </div>
    );
}
