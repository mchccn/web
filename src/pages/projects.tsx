import { Octokit } from "@octokit/core";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Projects({ repos }: { repos: { data: any[] } }) {
    console.log(repos);

    return (
        <Layout>
            <Header />
            <div className="content flex flex-col items-center">
                <div className="guides p-4 m-4">
                    <h2 className="my-2 sm:my-4 text-4xl sm:text-5xl md:text-6xl text-accent text-gradient bg-gradient-to-r from-softAccent to-accent h-16">
                        Projects
                    </h2>
                    <p className="mb-4 text-sm text-lighterDark">
                        These are our open source projects that anyone can freely contribute to.
                    </p>
                    {repos.data.map((repo) => (
                        <a href={repo.html_url}>
                            <div className="border border-text p-4 rounded-sm shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-mono my-1 font-thin lg:text-2xl">{repo.name}</h3>
                                <p className="text-sm lg:text-base">{repo.description || "No description."}</p>
                                <p className="text-xs text-lighterDark">{repo.language}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </Layout>
    );
}

export async function getStaticProps() {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    const json = await octokit.request("GET /orgs/{org}/repos", {
        org: "NovaProjects",
        direction: "asc",
        type: "public",
        sort: "pushed",
        per_page: 10,
    });

    return {
        props: {
            repos: json,
        },
    };
}
