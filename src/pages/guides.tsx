import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Guides() {
    return (
        <Layout>
            <Header />
            <div className="content flex flex-col items-center">
                <div className="guides p-4 m-4">
                    <h2 className="my-2 sm:my-4 text-4xl sm:text-5xl md:text-6xl text-accent text-gradient bg-gradient-to-r from-softAccent to-accent">
                        Guides
                    </h2>
                    <p className="mb-4 text-sm text-lighterDark">
                        These guides cover the basics of each topic and leave you with enough knowledge to make your own amazing
                        projects!
                    </p>
                    <a href="/guides/discord.js">
                        <div className="border border-text p-4 rounded-sm shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-mono my-1 font-thin lg:text-2xl">discord.js</h3>
                            <p className="text-sm lg:text-base my-2">
                                Set up your environment and start developing Discord bots! Covers basic command handling,
                                arguments, and Discord API.
                            </p>
                            <p className="text-xs text-lighterDark mt-2">Prerequisites: JavaScript.</p>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </Layout>
    );
}
