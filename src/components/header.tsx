export default function Header() {
    return (
        <header className="bg-light z-50 shadow-md p-4 h-26 grid place-items-center sm:h-16 sm:flex">
            <div className="flex flex-col items-center sm:flex-row">
                <a href="/">
                    <h3 className="cocomat-title text-3xl my-2 sm:mr-4">
                        N<span className="text-accent">o</span>va
                    </h3>
                </a>
                <div className="flex items-center">
                    <a href="/projects">
                        <h3 className="text-sm mx-2 font-light uppercase hover:text-softAccent transition-colors">projects</h3>
                    </a>
                    <a href="/guides">
                        <h3 className="text-sm mx-2 font-light uppercase hover:text-softAccent transition-colors">guides</h3>
                    </a>
                    <a href="https://discord.com/invite/UUm9kTFJN6" target="_blank" rel="nofollow">
                        <h3 className="text-sm mx-2 font-light uppercase hover:text-softAccent transition-colors">Discord</h3>
                    </a>
                    <a href="https://github.com/NovaProjects" target="_blank" rel="nofollow">
                        <h3 className="text-sm mx-2 font-light uppercase hover:text-softAccent transition-colors">GitHub</h3>
                    </a>
                </div>
            </div>
        </header>
    );
}
