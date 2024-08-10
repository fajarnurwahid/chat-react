export default function StatusGroupTitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <p className="font-medium text-sm text-neutral-700 dark:text-neutral-300 mx-4 md:mx-6 mb-2">
            {children}
        </p>
    );
}
