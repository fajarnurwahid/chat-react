import { twMerge } from "tailwind-merge";
import Header from "../../components/status/Header";
import StatusGroup from "../../components/status/status-group/StatusGroup";

type StatusProps = {
    isIndex?: boolean;
};

export default function Status({ isIndex = false }: StatusProps) {
    return (
        <div
            className={twMerge(
                "h-full w-full lg:w-72 border-r border-r-neutral-200 dark:border-r-neutral-700 flex flex-col lg:flex-shrink-0 bg-white dark:bg-neutral-800",
                !isIndex &&
                    "invisible w-0 h-0 lg:w-72 lg:h-full border-r-0 lg:border-r lg:visible"
            )}
        >
            <Header />
            <StatusGroup />
        </div>
    );
}
