import ActionLink from "../components/ActionLink";
import SectionLabel from "../components/SectionLabel";
import usePageMetadata from "../hooks/usePageMetadata";

function NotFound() {
    usePageMetadata("Page Not Found", "The page you are looking for does not exist.");

    return (
        <main className="py-16 sm:py-24">
            <SectionLabel>404</SectionLabel>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground theme-transition sm:text-5xl">
                Page not found
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-secondary theme-transition sm:text-base">
                That page does not exist. Head back to the main page or jump into one of the portfolios.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
                <ActionLink href="/" showArrow>Back to Home</ActionLink>
                <ActionLink href="/software" variant="text">Software</ActionLink>
                <ActionLink href="/creative" variant="text">Creative</ActionLink>
            </div>
        </main>
    );
}

export default NotFound;
