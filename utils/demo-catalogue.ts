import type { CategoryWithPackages, Package } from "~/types";

/**
 * Dev-only catalogue.
 *
 * The Tebex Headless API is unreachable in offline/sandbox environments, which
 * makes it impossible to review the storefront. These fixtures mirror the shape
 * of a real `GET /accounts/{key}/categories?includePackages=1` payload and are
 * only used when the live request fails in development (`import.meta.dev`).
 */

const base = {
    currency: "USD",
    discount: 0,
    sales_tax: 0,
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
    expiration_date: null,
    disable_gifting: false,
    disable_quantity: false,
    image: "",
};

const pkg = (
    id: number,
    name: string,
    base_price: number,
    description: string,
    type: string,
    category: { id: number; name: string },
): Package => ({
    ...base,
    id,
    name,
    base_price,
    total_price: base_price,
    type,
    description,
    category,
});

export const DEMO_CATEGORIES: CategoryWithPackages[] = [
    {
        id: 1,
        name: "Memberships",
        description:
            "Monthly perks that stay with you while you support the SMP.",
        parent: 0,
        order: 0,
        display_type: "grid",
        packages: [
            pkg(
                101,
                "Catalyst+",
                4.99,
                "<p>Everything you need to get started on Catalyst SMP.</p>" +
                    "<ul><li>Homes: 9</li><li>Auction slots: 15</li><li>Order slots: 15</li>" +
                    "<li>Kits: every 24h</li></ul>",
                "subscription",
                { id: 1, name: "Memberships" },
            ),
            pkg(
                102,
                "Catalyst++",
                9.99,
                "<p>For players who live on the auction house.</p>" +
                    "<ul><li>Homes: 18</li><li>Auction slots: 30</li><li>Order slots: 30</li>" +
                    "<li>Kits: every 12h</li><li>Colour chat and nicknames: included</li></ul>",
                "subscription",
                { id: 1, name: "Memberships" },
            ),
            pkg(
                103,
                "Catalyst+++",
                19.99,
                "<p>The full SMP, no waiting. Includes 5,000 Shards every month.</p>" +
                    "<ul><li>Homes: 36</li><li>Auction slots: 45</li><li>Order slots: 45</li>" +
                    "<li>Kits: every 6h</li><li>Particle effects: included</li></ul>",
                "subscription",
                { id: 1, name: "Memberships" },
            ),
        ],
    },
    {
        id: 2,
        name: "Shards",
        description:
            "Spend Shards on the auction house, /store and community events.",
        parent: 0,
        order: 1,
        display_type: "grid",
        packages: [
            pkg(
                201,
                "Small Shard Pack",
                0.99,
                "<p>1,100 Shards (1,000 + 10% bonus). Delivered instantly.</p>",
                "currency",
                { id: 2, name: "Shards" },
            ),
            pkg(
                202,
                "Medium Shard Pack",
                4.99,
                "<p>6,000 Shards (5,000 + 20% bonus).</p>",
                "currency",
                { id: 2, name: "Shards" },
            ),
            pkg(
                203,
                "Large Shard Pack",
                9.99,
                "<p>13,000 Shards (10,000 + 30% bonus). A solid auction-house top-up.</p>",
                "currency",
                { id: 2, name: "Shards" },
            ),
            pkg(
                204,
                "Max Shard Pack",
                19.99,
                "<p>21,000 Shards (15,000 + 40% bonus). The best value way to fund your balance.</p>",
                "currency",
                { id: 2, name: "Shards" },
            ),
        ],
    },
];
