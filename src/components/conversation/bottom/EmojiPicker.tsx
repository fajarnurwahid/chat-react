import { Smile } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverMenu,
    PopoverMenuItem,
    PopoverTrigger,
} from "../../ui/Popover";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { EMOJI_KEY } from "../../../constant/emoji";
import Input from "../../ui/Input";

type EmojiPickerProps = {
    inputRef: React.RefObject<HTMLInputElement>;
};
type EmojiType = {
    slug: string;
    character: string;
    unicodeName: string;
    codePoint: string;
    group: string;
    subGroup: string;
};

export default function EmojiPicker({ inputRef }: EmojiPickerProps) {
    const [emojis, setEmojis] = useState<EmojiType[] | null>(null);
    const searchAbortRef = useRef<AbortController | null>(null);

    useEffect(getEmojis, []);

    function getEmojis(search = "") {
        if (searchAbortRef.current) {
            searchAbortRef.current.abort();
        }
        const controller = new AbortController();
        searchAbortRef.current = controller;
        axios
            .get(
                `https://emoji-api.com/emojis?search=${search}&access_key=${EMOJI_KEY}`,
                {
                    signal: controller.signal,
                }
            )
            .then((result) => {
                setEmojis(result.data);
            })
            .catch(() => {});
    }
    function handleEmojiClick(character: string) {
        inputRef.current && (inputRef.current.value += character);
    }
    function handleEmojiSearch(e: React.ChangeEvent<HTMLInputElement>) {
        getEmojis(e.currentTarget.value);
    }

    return (
        <Popover placement="top-start">
            <PopoverTrigger asChild>
                <button
                    type="button"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100 flex-shrink-0 [&[data-state=open]]:bg-neutral-100 dark:[&[data-state=open]]:bg-neutral-900 [&[data-state=open]]:text-neutral-900 dark:[&[data-state=open]]:text-neutral-100"
                >
                    <Smile size={16} />
                </button>
            </PopoverTrigger>
            <PopoverContent>
                {emojis ? (
                    <PopoverMenu className="w-72">
                        <Input
                            type="search"
                            className="mb-2"
                            placeholder="Search"
                            onInput={handleEmojiSearch}
                        />
                        <div className="max-h-80 overflow-y-auto grid grid-cols-7">
                            {emojis.map((emoji, i) => (
                                <PopoverMenuItem
                                    key={i}
                                    title={emoji.unicodeName}
                                    className="h-auto aspect-square px-0 justify-center text-lg"
                                    closeOnClick={false}
                                    onClick={() => {
                                        handleEmojiClick(emoji.character);
                                    }}
                                >
                                    {emoji.character}
                                </PopoverMenuItem>
                            ))}
                        </div>
                    </PopoverMenu>
                ) : (
                    <PopoverMenu className="w-72">
                        <p className="text-center text-sm my-4">Loading...</p>
                    </PopoverMenu>
                )}
            </PopoverContent>
        </Popover>
    );
}
