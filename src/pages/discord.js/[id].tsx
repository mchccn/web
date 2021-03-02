import { GetServerSideProps } from "next";
import { useState } from "react";
import Header from "../../components/djs/header";
import Sidebar from "../../components/djs/sidebar";
import Layout from "../../components/layout";
import { getGuideData, getGuidesData } from "../../lib/djs";
import { IDiscordJSProps } from "../discord.js";
export interface IDiscordJSIdProps extends IDiscordJSProps {
    guideData: {
        index: number;
        title: string;
        htmlContent: string;
        id: string;
    };
}

export default function DiscordJS({ allGuidesData, guideData }: IDiscordJSIdProps) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <Layout title={`discord.js – ${guideData.title}`}>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params!;

    const allGuidesData = getGuidesData();

    const guideData = await getGuideData(Array.isArray(id) ? id[0] : id!);

    if (!guideData)
        return {
            notFound: true,
        };

    return {
        props: {
            allGuidesData,
            guideData,
        },
    };
};
