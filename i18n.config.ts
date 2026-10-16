export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en-US",
    numberFormats: {
        "en-US": {
            currency: {
                style: "currency",
                currency: "USD",
                notation: "standard",
            },
        },
        "de-DE": {
            currency: {
                style: "currency",
                currency: "EUR",
                notation: "standard",
            },
        },
    },
    messages: {
        "en-US": {
            store_name: "Catalyst SMP",
            play: "play.catalystsmp.net",
            index: {
                hero: {
                    title: "Store",
                    subtitle: "Upgrade your experience on {storeName}",
                },
                category: {
                    hintMemberships:
                        "Memberships are billed monthly in USD and apply the moment you rejoin.",
                    hintCurrency:
                        "Shard packs are one-time and land on your balance instantly.",
                },
                dev: {
                    sampleNote:
                        "Showing sample packages — point nuxt.config.ts at your Tebex category to go live.",
                },
                empty: {
                    title: "The store is being restocked",
                    description:
                        "No packages are live yet. Publish one in your Tebex category, then refresh.",
                    cta: "Retry live data",
                },
            },
            buttons: {
                checkout: "Proceed to Checkout",
                cart: "Cart | Cart ({n}) | Cart ({n})",
                add_to_cart: "Add to cart",
                add_gift_to_cart: "Add Gift to Cart",
                gift: "Gift",
                login: "Login",
                logout: "Log Out",
                copied: "Copied!",
                copy_ip: "Click to copy",
            },
            auth: {
                login: {
                    title: "Please enter your {gameTypeName} username",
                },
                logout: {
                    title: "Are you sure you want to log out?",
                },
                login_redirect: {
                    title: "Click here to login",
                    method: "Login with {name}",
                },
                login_complete: {
                    title: "Logged in successfully",
                },
                username: "Username",
            },
            gift: {
                input_placeholder: "Recipient {gameTypeName} Username",
            },
            error: {
                page_not_found: "Page not found",
                cannot_add_package:
                    "You are not allowed to purchase this package",
            },
            footer: {
                copyright: "© {year} {storeName}. All rights reserved.",
                disclaimer: "Not associated with Mojang or Microsoft.",
                legalTitle: "Store policies",
                poweredBy: "Powered by {tebex}",
                blurb: "This website and its checkout process is owned & operated by Tebex Limited, who handle product fulfillment, billing support and refunds.",
                imprint: "Impressum",
                terms: "Terms & Conditions",
                privacy: "Privacy Policy",
            },
            messages: {
                success: {
                    added_to_cart: "{name} Added to cart",
                    removed_from_cart: "{name} Removed from cart",
                },
            },
            titles: {
                login: "Login",
                package: "{name}",
            },
            checkout: {
                completed: {
                    subtitle:
                        "You should receive your items within a few minutes",
                },
            },
            cart: {
                title: "Cart",
                empty: "Your cart is empty",
                total: "Total",
                item: {
                    quantity: "x{quantity}",
                    gift_to: "Gift to {username}",
                },
            },
            category: {
                image_alt: "An image for the {name} category",
            },
        },
        "de-DE": {
            store_name: "Catalyst SMP",
            play: "play.catalystsmp.net",
            index: {
                hero: {
                    title: "Shop",
                    subtitle: "Verbessere dein Erlebnis auf {storeName}",
                },
                category: {
                    hintMemberships:
                        "Memberships werden monatlich in USD abgerechnet und sofort im Spiel aktiv.",
                    hintCurrency:
                        "Shard-Packs sind einmalig und liegen direkt auf deinem Konto.",
                },
                dev: {
                    sampleNote:
                        "Beispiel-Pakete aktiv – in nuxt.config.ts die Tebex-Kategorie eintragen, um live zu gehen.",
                },
                empty: {
                    title: "Der Shop wird gerade bestückt",
                    description:
                        "Noch sind keine Pakete live. Veröffentliche eines in deiner Tebex-Kategorie und lade neu.",
                    cta: "Live-Daten erneut laden",
                },
            },
            buttons: {
                checkout: "Zur Kasse gehen",
                cart: "Warenkorb | Warenkorb ({n}) | Warenkorb ({n})",
                add_to_cart: "In den Warenkorb",
                add_gift_to_cart: "Geschenk in den Warenkorb",
                gift: "Geschenk",
                login: "Anmelden",
                logout: "Abmelden",
                copied: "Kopiert!",
                copy_ip: "Klicken zum Kopieren",
            },
            auth: {
                login: {
                    title: "Bitte gib deinen {gameTypeName} Benutzernamen ein",
                },
                logout: {
                    title: "Bist du sicher, dass du dich abmelden möchtest?",
                },
                login_redirect: {
                    title: "Hier klicken, um sich anzumelden",
                    method: "Anmelden mit {name}",
                },
                login_complete: {
                    title: "Erfolgreich angemeldet",
                },
                username: "Benutzername",
            },
            gift: {
                input_placeholder: "Benutzername des Empfängers {gameTypeName}",
            },
            error: {
                page_not_found: "Seite nicht gefunden",
                cannot_add_package: "Du kannst dieses Paket nicht kaufen",
            },
            footer: {
                copyright: "© {year} {storeName}. Alle Rechte vorbehalten.",
                disclaimer: "Nicht verbunden mit Mojang oder Microsoft.",
                legalTitle: "Shop-Richtlinien",
                poweredBy: "Betrieben von {tebex}",
                blurb: "Diese Website und ihr Checkout-Prozess werden von Tebex Limited betrieben. Tebex kümmert sich um Zustellung, Rechnungsunterstützung und Rückerstattungen.",
                imprint: "Impressum",
                terms: "AGB",
                privacy: "Datenschutzerklärung",
            },
            messages: {
                success: {
                    added_to_cart: "{name} in den Warenkorb gelegt",
                    removed_from_cart: "{name} aus dem Warenkorb entfernt",
                },
            },
            titles: {
                login: "Anmelden",
                package: "{name}",
            },
            checkout: {
                completed: {
                    subtitle:
                        "Du solltest deine Artikel in wenigen Minuten erhalten",
                },
            },
            cart: {
                title: "Warenkorb",
                empty: "Dein Warenkorb ist leer",
                total: "Gesamt",
                item: {
                    quantity: "x{quantity}",
                    gift_to: "Geschenk an {username}",
                },
            },
            category: {
                image_alt: "Ein Bild für die Kategorie {name}",
            },
        },
    },
}));
