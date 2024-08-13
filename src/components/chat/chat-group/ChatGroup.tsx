import ChatGroupItem from "./ChatGroupItem";

export default function ChatGroup() {
    return (
        <div className="overflow-y-auto min-h-0 h-full">
            <ChatGroupItem
                username="jonathan"
                image="https://github.com/shadcn.png"
                name="Jonathan"
                lastMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, vero!"
                time="10:00 AM"
                unRead={5}
            />
            <ChatGroupItem
                username="johndoe"
                image="https://github.com/shadcn.png"
                name="John Doe"
                lastMessage="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, vero!"
                time="10:00 AM"
                isOnline={true}
            />
        </div>
    );
}
