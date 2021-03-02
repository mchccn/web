import { useState } from "react";
import Header from "../components/djs/header";
import Sidebar from "../components/djs/sidebar";
import Layout from "../components/layout";
import { getGuidesData } from "../lib/djs";

export interface IDiscordJSProps {
    allGuidesData: {
        index: number;
        title: string;
        id: string;
    }[];
}

export default function DiscordJS({ allGuidesData }: IDiscordJSProps) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <Layout title="discord.js">
            <div className="flex flex-col h-screen">
                <Header open={navOpen} setOpen={setNavOpen} />
                <div className="flex flex-row flex-1">
                    <Sidebar guides={allGuidesData} open={navOpen} />
                    <div className="flex-1 p-4 bg-light">fucking nothing with a little something.</div>
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const allGuidesData = getGuidesData();

    return {
        props: {
            allGuidesData,
        },
    };
};
