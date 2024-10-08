import * as React from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    hide,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
    useMergeRefs,
    Placement,
    FloatingPortal,
    FloatingFocusManager,
} from "@floating-ui/react";
import { twMerge } from "tailwind-merge";

interface PopoverOptions {
    initialOpen?: boolean;
    placement?: Placement;
    modal?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function usePopover({
    initialOpen = false,
    placement = "bottom",
    modal,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
}: PopoverOptions = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
    const [labelId, setLabelId] = React.useState<string | undefined>();
    const [descriptionId, setDescriptionId] = React.useState<
        string | undefined
    >();

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        strategy: "fixed",
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "end",
                padding: 5,
            }),
            shift({ padding: 5 }),
            hide(),
        ],
    });

    const context = data.context;

    const click = useClick(context, {
        enabled: controlledOpen == null,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const interactions = useInteractions([click, dismiss, role]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
            modal,
            labelId,
            descriptionId,
            setLabelId,
            setDescriptionId,
        }),
        [open, setOpen, interactions, data, modal, labelId, descriptionId]
    );
}

type ContextType =
    | (ReturnType<typeof usePopover> & {
          setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
          setDescriptionId: React.Dispatch<
              React.SetStateAction<string | undefined>
          >;
      })
    | null;

const PopoverContext = React.createContext<ContextType>(null);

export const usePopoverContext = () => {
    const context = React.useContext(PopoverContext);

    if (context == null) {
        throw new Error("Popover components must be wrapped in <Popover />");
    }

    return context;
};

export function Popover({
    children,
    modal = false,
    ...restOptions
}: {
    children: React.ReactNode;
} & PopoverOptions) {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const popover = usePopover({ modal, ...restOptions });
    return (
        <PopoverContext.Provider value={popover}>
            {children}
        </PopoverContext.Provider>
    );
}

interface PopoverTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export const PopoverTrigger = React.forwardRef<
    HTMLElement,
    React.HTMLProps<HTMLElement> & PopoverTriggerProps
>(function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
    const context = usePopoverContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...children.props,
                "data-state": context.open ? "open" : "closed",
            })
        );
    }

    return (
        <button
            ref={ref}
            type="button"
            // The user can style the trigger based on the state
            data-state={context.open ? "open" : "closed"}
            {...context.getReferenceProps(props)}
        >
            {children}
        </button>
    );
});

export const PopoverContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(function PopoverContent({ style, ...props }, propRef) {
    const { context: floatingContext, ...context } = usePopoverContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!floatingContext.open) return null;

    return (
        <FloatingPortal>
            <FloatingFocusManager
                context={floatingContext}
                modal={context.modal}
            >
                <div
                    ref={ref}
                    style={{ ...context.floatingStyles, ...style }}
                    aria-labelledby={context.labelId}
                    aria-describedby={context.descriptionId}
                    className={twMerge(
                        "z-40",
                        context.middlewareData.hide?.referenceHidden && "hidden"
                    )}
                    {...context.getFloatingProps(props)}
                >
                    {props.children}
                </div>
            </FloatingFocusManager>
        </FloatingPortal>
    );
});

export const PopoverClose = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(function PopoverClose(props, ref) {
    const { setOpen } = usePopoverContext();
    return (
        <button
            type="button"
            ref={ref}
            {...props}
            onClick={(event) => {
                props.onClick?.(event);
                setOpen(false);
            }}
        />
    );
});

export function PopoverMenu({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={twMerge(
                "bg-white dark:bg-neutral-800 shadow border border-neutral-100 dark:border-neutral-700 rounded-lg p-1 w-48 space-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function PopoverMenuItem({
    children,
    onClick,
    closeOnClick = true,
    className,
    isActive = false,
    ...props
}: {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isActive?: boolean;
    closeOnClick?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { setOpen } = usePopoverContext();
    return (
        <button
            className={twMerge(
                "h-7 px-3 flex items-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 text-xs w-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 space-x-3 [&.active]:text-blue-500 dark:[&.active]:text-blue-400 [&.active]:bg-blue-50 dark:[&.active]:bg-blue-500/20",
                className,
                isActive && "active"
            )}
            onClick={(event) => {
                onClick?.(event);
                closeOnClick && setOpen(false);
            }}
            {...props}
        >
            {children}
        </button>
    );
}
