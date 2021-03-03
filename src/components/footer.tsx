export default function Footer() {
    return (
        <footer className="footer bg-lighterDark text-light px-4 pb-8 pt-12 grid place-items-center">
            <div>
                <p className="text-sm text-darkerLight font-extralight">
                    Open source projects, guides, and software for beginning developers.
                </p>
                <div className="flex items-center justify-between my-2">
                    <a href="/projects">
                        <h3 className="text-sm font-light uppercase hover:text-accent transition-colors">projects</h3>
                    </a>
                    <a href="/guides">
                        <h3 className="text-sm font-light uppercase hover:text-accent transition-colors">guides</h3>
                    </a>
                    <a href="https://discord.com/invite/UUm9kTFJN6" target="_blank" rel="nofollow">
                        <h3 className="text-sm font-light uppercase hover:text-accent transition-colors">Discord</h3>
                    </a>
                    <a href="https://github.com/NovaProjects" target="_blank" rel="nofollow">
                        <h3 className="text-sm font-light uppercase hover:text-accent transition-colors">GitHub</h3>
                    </a>
                </div>
                <hr className="border border-softAccent" />
                <div className="flex justify-between">
                    <h3 className="cocomat-title text-3xl my-2">
                        N<span className="text-accent">o</span>va
                    </h3>
                </div>
            </div>
        </footer>
    );
}
