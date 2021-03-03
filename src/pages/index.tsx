import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Index() {
    return (
        <Layout>
            <Header />
            <div className="content">
                fucking nothing here, visit our{" "}
                <a href="/guides" className="link">
                    guides
                </a>{" "}
                instead.
            </div>
            <Footer />
        </Layout>
    );
}
