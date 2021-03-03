import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Guides() {
    return (
        <Layout>
            <Header />
            <div className="content">
                also fucking nothing, visit our{" "}
                <a href="/guides/discord.js" className="link">
                    discord.js guide
                </a>{" "}
                instead.
            </div>
            <Footer />
        </Layout>
    );
}
