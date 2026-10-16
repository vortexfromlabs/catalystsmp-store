import type { LegalPage, LegalPageKey } from "~/utils/legal-content";

/**
 * Shared state for the legal / support popup modals so any component (footer,
 * hero, package page) can open them and only one host instance renders them.
 */
export const useLegalModal = () => {
    const activeKey = useState<LegalPageKey | null>("legal-modal", () => null);

    const page = computed<LegalPage | null>(() =>
        activeKey.value ? LEGAL_PAGES[activeKey.value] : null,
    );

    const isOpen = computed({
        get: () => activeKey.value !== null,
        set: (value: boolean) => {
            if (!value) close();
        },
    });

    function open(key: LegalPageKey) {
        activeKey.value = key;
    }

    function close() {
        activeKey.value = null;
    }

    return { activeKey, page, isOpen, open, close };
};
