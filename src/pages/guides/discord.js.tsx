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
                    <div className="flex-1 p-4 bg-light">fucking nothing with a little something.</div>
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
