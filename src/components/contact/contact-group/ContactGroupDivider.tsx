export default function ContactGroupDivider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center px-4 md:px-6 after:h-0 after:w-full after:border-b after:border-b-neutral-200 dark:after:border-b-neutral-700 after:min-w-0 after:ml-3 mb-1">
            <span className="text-neutral-700 dark:text-neutral-300 text-sm font-medium flex-shrink-0">
                {children}
            </span>
        </div>
    );
}
