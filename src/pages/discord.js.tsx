import Layout from "../components/layout";
import { getGuidesData } from "../lib/djs";

interface IDiscordJSProps {
    allGuidesData: {
        index: number;
        title: string;
        id: string;
    }[];
}

export default function DiscordJS({ allGuidesData }: IDiscordJSProps) {
    return (
        <Layout title="discord.js">
            <div></div>
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
