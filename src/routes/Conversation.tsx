import ConversationBottom from "../components/ConversationBottom";
import ConversationMessageItem, {
    ConversationMessageItemBubble,
} from "../components/ConversationMessageItem";
import ConversationTopbar from "../components/ConversationTopbar";

export default function Conversation() {
    return (
        <div className="min-w-0 w-full flex flex-col">
            <ConversationTopbar />
            <div className="overflow-y-auto h-full min-h-0 p-4 bg-neutral-100 space-y-4">
                <ConversationMessageItem image="https://github.com/shadcn.png">
                    <ConversationMessageItemBubble
                        time="10:00 AM"
                        isRead={true}
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Enim, sapiente.
                        </p>
                    </ConversationMessageItemBubble>
                    <ConversationMessageItemBubble
                        time="10:00 AM"
                        isRead={true}
                    >
                        <img
                            src="https://github.com/shadcn.png"
                            className="w-full max-w-48 rounded mb-2"
                            alt=""
                        />
                        <p>Hello there</p>
                    </ConversationMessageItemBubble>
                    <ConversationMessageItemBubble time="10:00 AM">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sit ab, aliquid voluptatem odio soluta
                            voluptas autem, quam neque fugiat ducimus quod,
                            tempora magnam modi commodi dolorem corporis libero
                            possimus iste!
                        </p>
                    </ConversationMessageItemBubble>
                </ConversationMessageItem>
                <ConversationMessageItem
                    image="https://github.com/shadcn.png"
                    isMe={true}
                >
                    <ConversationMessageItemBubble
                        time="10:00 AM"
                        isRead={true}
                    >
                        <img
                            src="https://github.com/shadcn.png"
                            className="w-full max-w-48 rounded mb-2"
                            alt=""
                        />
                        <p>Hello there</p>
                    </ConversationMessageItemBubble>
                    <ConversationMessageItemBubble
                        time="10:00 AM"
                        isRead={true}
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Enim, sapiente.
                        </p>
                    </ConversationMessageItemBubble>
                    <ConversationMessageItemBubble time="10:00 AM">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sit ab, aliquid voluptatem odio soluta
                            voluptas autem, quam neque fugiat ducimus quod,
                            tempora magnam modi commodi dolorem corporis libero
                            possimus iste!
                        </p>
                    </ConversationMessageItemBubble>
                </ConversationMessageItem>
            </div>
            <ConversationBottom />
        </div>
    );
}
