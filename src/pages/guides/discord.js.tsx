import { useState } from "react";
import Header from "../../components/guides/header";
import Sidebar from "../../components/guides/sidebar";
import Layout from "../../components/layout";
import { getGuidesData } from "../../lib/djs";
import { IGuideProps } from "../../lib/types";

export interface IDiscordJSProps extends IGuideProps {}

export default function DiscordJS({ allGuidesData }: IDiscordJSProps) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <Layout title="discord.js">
            <div className="flex flex-col h-screen">
                <Header open={navOpen} setOpen={setNavOpen} title={"discord.js"} home={"discord.js"} />
                <div className="flex flex-row flex-1">
                    <Sidebar guides={allGuidesData} open={navOpen} namespace={"discord.js"} />
                    <div className="flex-1 p-4 bg-light">
                        <div className="flex items-center">
                            <h3 className="cocomat-title text-3xl my-2 sm:mr-4 sm:my-0">
                                N<span className="text-accent">o</span>va
                            </h3>
                            <h4 className="text-2xl font-light">discord.js guide</h4>
                        </div>
                        <p className="my-2">
                            This is the official Nova guide. Click on{" "}
                            <a href="/guides/discord.js/welcome" className="link">
                                here
                            </a>{" "}
                            to get started!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const allGuidesData = getGuidesData();

    return {
        props: {
            allGuidesData,
        },
    };
}
