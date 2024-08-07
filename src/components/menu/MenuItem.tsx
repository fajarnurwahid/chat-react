import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type MenuItemProps = LinkProps & {
    children: React.ReactNode;
    isActive?: boolean;
};

const MenuItem = React.forwardRef<HTMLAnchorElement, MenuItemProps>(
    ({ children, isActive, className, ...props }, ref) => (
        <Link
            ref={ref}
            className={twMerge(
                "w-10 h-10 rounded-lg flex items-center justify-center md:!mx-auto text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 [&.active]:bg-blue-50 dark:[&.active]:bg-blue-500/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 flex-shrink-0",
                className,
                isActive && "active"
            )}
            {...props}
        >
            {children}
        </Link>
    )
);

export default MenuItem;
