import { useToastStore } from "~/stores/toast";

/**
 * Clipboard helper used by the "click to copy" server IP widgets.
 * Falls back to a hidden textarea when the async clipboard API is blocked
 * (http origins, older Safari, embedded webviews).
 */
export const useCopyToClipboard = (onCopied?: () => void) => {
    const toastStore = useToastStore();
    const copied = ref(false);

    let resetTimer: ReturnType<typeof setTimeout> | undefined;

    const writeToClipboard = async (value: string) => {
        if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(value);
            return;
        }

        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.top = "-1000px";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();

        const ok = document.execCommand("copy");
        textarea.remove();

        if (!ok) throw new Error("Clipboard access was denied");
    };

    const copy = async (
        value: string,
        successMessage = "Server IP copied!",
    ) => {
        try {
            await writeToClipboard(value);

            copied.value = true;
            onCopied?.();
            toastStore.addToast(successMessage, {
                type: "success",
                timeout: 2600,
            });
        } catch {
            toastStore.addToast(`Copy failed — the address is ${value}`, {
                type: "info",
                timeout: 6000,
            });
        }

        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            copied.value = false;
        }, 2600);
    };

    onBeforeUnmount(() => {
        if (resetTimer) clearTimeout(resetTimer);
    });

    return { copied, copy };
};
