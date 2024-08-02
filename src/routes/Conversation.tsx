import ConversationBottom from "../components/conversation/ConversationBottom";
import ConversationMessageItem from "../components/conversation/ConversationMessageItem";
import ConversationMessageItemBubble from "../components/conversation/ConversationMessageItemBubble";
import ConversationMessageItemCall from "../components/conversation/ConversationMessageItemCall";
import ConversationMessageItemImage from "../components/conversation/ConversationMessageItemImage";
import ConversationTopbar from "../components/conversation/ConversationTopbar";

export default function Conversation() {
    return (
        <div className="min-w-0 w-full flex flex-col">
            <ConversationTopbar />
            <div className="overflow-y-auto h-full min-h-0 p-4 bg-neutral-50 space-y-4">
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
                        <ConversationMessageItemImage
                            images={[
                                {
                                    src: "https://github.com/shadcn.png",
                                },
                            ]}
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
                        <ConversationMessageItemImage
                            images={[
                                {
                                    src: "https://github.com/shadcn.png",
                                },
                                {
                                    src: "https://github.com/shadcn.png",
                                },
                                {
                                    src: "https://github.com/shadcn.png",
                                },
                            ]}
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
                    <ConversationMessageItemBubble time="10:00 AM">
                        <ConversationMessageItemCall type="audio" />
                    </ConversationMessageItemBubble>
                    <ConversationMessageItemBubble time="10:00 AM">
                        <ConversationMessageItemCall
                            type="video"
                            isMissed={true}
                        />
                    </ConversationMessageItemBubble>
                </ConversationMessageItem>
            </div>
            <ConversationBottom />
        </div>
    );
}
