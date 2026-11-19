import { useEffect, useRef, useState } from "react";
import type { AnimationEvent, MouseEvent } from "react";

const closeAnimationFallbackDelay = 300;

/** Shared open/close lifecycle for the animated project dialogs. */
function useAnimatedDialog(onClose: () => void) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const closeTimeoutRef = useRef<number | null>(null);
    const closeStartedRef = useRef(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        dialog.showModal();

        return () => {
            if (closeTimeoutRef.current !== null) {
                window.clearTimeout(closeTimeoutRef.current);
            }
            if (dialog.open) dialog.close();
        };
    }, []);

    function requestClose() {
        if (closeStartedRef.current) return;
        closeStartedRef.current = true;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            onClose();
            return;
        }

        setIsClosing(true);
        closeTimeoutRef.current = window.setTimeout(onClose, closeAnimationFallbackDelay);
    }

    function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
        if (event.target === event.currentTarget) requestClose();
    }

    function handleAnimationEnd(event: AnimationEvent<HTMLDialogElement>) {
        if (event.target === event.currentTarget && event.animationName === "dialog-exit") {
            if (closeTimeoutRef.current !== null) {
                window.clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
            }
            onClose();
        }
    }

    return { dialogRef, isClosing, requestClose, handleBackdropClick, handleAnimationEnd };
}

export default useAnimatedDialog;
