import Divider from "../components/Divider";

function Home() {
    return (
        <main>
            <section className="mt-8">
            <h1 className="text-3xl font-extrabold text-foreground theme-transition">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg text-secondary theme-transition">
                Explore my projects, experience, and get in touch.
            </p>
            </section>
            <Divider />
            <section className="mt-8">
                <h2 className="text-2xl font-bold text-foreground theme-transition">About Me</h2>
                <p className="mt-4 text-lg text-secondary theme-transition">
                    I am a passionate developer with experience in building web applications using modern technologies.
                </p>
            </section>
            <Divider />
            <section className="mt-8">
                <h2 className="text-2xl font-bold text-foreground theme-transition">Projects</h2>
                <p className="mt-4 text-lg text-secondary theme-transition">
                    Here are some of the projects I have worked on, showcasing my skills and experience in web development.
                </p>
            </section>
        </main>
    );
}

export default Home;