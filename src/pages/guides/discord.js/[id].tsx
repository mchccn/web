import { GetStaticPropsContext } from "next";
import { useState } from "react";
import Header from "../../../components/guides/header";
import Sidebar from "../../../components/guides/sidebar";
import Layout from "../../../components/layout";
import { getAllGuideIds, getGuideData, getGuidesData } from "../../../lib/djs";
import { IGuideIdProps } from "../../../lib/types";

export interface IDiscordJSIdProps extends IGuideIdProps {}

export default function DiscordJS({ allGuidesData, guideData }: IDiscordJSIdProps) {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <Layout title={`discord.js – ${guideData.title}`}>
            <div className="flex flex-col h-screen">
                <Header open={navOpen} setOpen={setNavOpen} title={"discord.js"} home={"discord.js"} />
                <div className="flex flex-row flex-1">
                    <Sidebar guides={allGuidesData} open={navOpen} namespace={"discord.js"} active={guideData.id} />
                    <div
                        className="flex-1 p-4 bg-light guide"
                        dangerouslySetInnerHTML={{
                            __html: guideData.htmlContent,
                        }}
                    ></div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllGuideIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const guideData = await getGuideData(params!.id as string);
    const allGuidesData = getGuidesData();

    return {
        props: {
            guideData,
            allGuidesData,
        },
    };
}
