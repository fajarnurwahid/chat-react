import MessageItem from "./MessageItem";
import MessageItemBubble from "./MessageItemBubble";
import MessageItemFile from "./MessageItemFile";
import MessageItemImage from "./MessageItemImage";
import { Link } from "react-router-dom";
import MessageItemCall from "./MessageItemCall";

export default function Message() {
    return (
        <div className="overflow-y-auto h-full min-h-0 p-4 bg-neutral-50 dark:bg-neutral-900 space-y-4">
            <MessageItem image="https://github.com/shadcn.png">
                <MessageItemBubble time="10:00 AM" isRead={true}>
                    <MessageItemFile
                        name="attachment.png"
                        size="100 MB"
                        className="mb-3"
                    />
                    <p>Hello there</p>
                </MessageItemBubble>
                <MessageItemBubble time="10:00 AM" isRead={true}>
                    <MessageItemImage
                        images={[
                            {
                                src: "https://github.com/shadcn.png",
                            },
                        ]}
                        className="mb-3"
                    />
                    <p>Hello there</p>
                </MessageItemBubble>
                <MessageItemBubble time="10:00 AM">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit ab, aliquid voluptatem odio{" "}
                        <Link
                            to="/"
                            className="text-blue-500 dark:text-blue-400 hover:underline"
                        >
                            soluta
                        </Link>{" "}
                        voluptas autem, quam neque fugiat ducimus quod, tempora
                        magnam modi commodi dolorem corporis libero possimus
                        iste!
                    </p>
                </MessageItemBubble>
            </MessageItem>
            <MessageItem image="https://github.com/shadcn.png" isMe={true}>
                <MessageItemBubble time="10:00 AM" isRead={true}>
                    <MessageItemImage
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
                        className="mb-3"
                    />
                    <p>Hello there</p>
                </MessageItemBubble>
                <MessageItemBubble time="10:00 AM" isRead={true}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Enim, sapiente.
                    </p>
                </MessageItemBubble>
                <MessageItemBubble time="10:00 AM">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit ab, aliquid voluptatem odio soluta voluptas autem,
                        quam neque fugiat ducimus quod, tempora magnam modi
                        commodi dolorem corporis libero possimus iste!
                    </p>
                </MessageItemBubble>
                <MessageItemBubble time="10:00 AM">
                    <MessageItemCall type="audio" />
                </MessageItemBubble>
                <MessageItemBubble time="10:00 AM">
                    <MessageItemCall type="video" isMissed={true} />
                </MessageItemBubble>
            </MessageItem>
        </div>
    );
}
