import StatusGroupItem from "./StatusGroupItem";
import StatusGroupTitle from "./StatusGroupTitle";

export default function StatusGroup() {
    return (
        <div className="h-full min-h-0 overflow-y-auto space-y-4 mt-4">
            <div>
                <StatusGroupTitle>My Status</StatusGroupTitle>
                <StatusGroupItem
                    image="https://github.com/shadcn.png"
                    username="jonathan"
                    name="Jonathan"
                    time="14:00"
                    total={5}
                    seen={2}
                />
            </div>
            <div>
                <StatusGroupTitle>Recent Status</StatusGroupTitle>
                <StatusGroupItem
                    image="https://github.com/shadcn.png"
                    username="jonathan"
                    name="Jonathan"
                    time="05:34"
                    total={3}
                    seen={1}
                />
                <StatusGroupItem
                    image="https://github.com/shadcn.png"
                    username="jonathan"
                    name="Jonathan"
                    time="03:45"
                    total={4}
                    seen={3}
                />
                <StatusGroupItem
                    image="https://github.com/shadcn.png"
                    username="jonathan"
                    name="Jonathan"
                    time="10:00"
                    total={1}
                    seen={1}
                />
                <StatusGroupItem
                    image="https://github.com/shadcn.png"
                    username="jonathan"
                    name="Jonathan"
                    time="13:54"
                    total={3}
                    seen={3}
                />
            </div>
        </div>
    );
}
