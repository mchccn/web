import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import { getGuideData, getGuidesData } from "../../lib/djs";

interface IDiscordJSProps {
    allGuidesData: {
        index: number;
        title: string;
        id: string;
    }[];
    guideData: {
        index: number;
        title: string;
        htmlContent: string;
        id: string;
    };
}

export default function DiscordJS({ allGuidesData, guideData }: IDiscordJSProps) {
    return (
        <Layout title={`discord.js – ${guideData.title}`}>
            <div></div>
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
