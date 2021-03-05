import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Index() {
    return (
        <Layout>
            <Header />
            <div className="content">
                <div className="banner bg-gradient-to-br from-dark to-lighterDark bg-fixed bg-contain w-full grid place-items-center">
                    <div className="p-8">
                        <h1 className="cocomat-title text-7xl text-light">
                            N<span className="text-accent">o</span>va
                        </h1>
                        <p className="text-darkerLight text-base">
                            Open source projects, guides, and software <br />
                            <span className="text-accent text-lg">for beginning developers.</span>
                        </p>
                    </div>
                </div>
                <div className="h-96 grid place-items-center">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p></p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
}
