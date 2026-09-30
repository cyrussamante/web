import ActionLink from "./ActionLink";

const socialLinks = [
    { label: "GitHub", href: "https://github.com/cyrussamante" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/cyrussamante" },
    { label: "Email", href: "mailto:contact@cyrussamante.com" },
];

function Footer() {
    return (
        <footer className="border-t border-border py-8 text-foreground theme-transition sm:py-10">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-8 gap-y-6 px-6 sm:grid-cols-2 sm:px-8 lg:px-12">
                <div>
                    <p className="font-semibold theme-transition">Let's build something.</p>
                    <p className="mt-2 max-w-md text-sm text-secondary theme-transition">
                        I am always open to new opportunities, collaborations, or just a good conversation.
                    </p>
                </div>
                <div className="flex items-end gap-5 text-sm text-secondary theme-transition sm:justify-end">
                    {socialLinks.map(({ label, href }) => (
                        <a key={label} href={href}>
                            {label}
                        </a>
                    ))}
                </div>
                <div className="text-sm font-medium text-accent">
                    <ActionLink href="mailto:contact@cyrussamante.com" variant="text" showArrow={true}>Get in Touch</ActionLink>
                </div>
                <div className="text-xs text-muted theme-transition sm:text-right">
                    &copy; {new Date().getFullYear()} Cyruss Amante
                </div>
            </div>
        </footer>
    );
}

export default Footer;