import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

export default function FourOhFour() {
    return (
        <Layout title="404">
            <Header />
            <div className="not-found grid place-items-center content">
                <div className="max-w-lg">
                    <h2 className="text-softAccent text-4xl md:text-5xl lg:text-6xl">404</h2>
                    <p>
                        Oops! You've stumbled to far to another galaxy! Return{" "}
                        <a href="/" className="link">
                            home
                        </a>
                        ?
                    </p>
                </div>
            </div>
            <Footer />
        </Layout>
    );
}
