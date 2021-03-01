import Head from "next/head";

interface ILayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function Layout({ children, title }: ILayoutProps) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <meta name="copyright" content="" />
                <meta name="robots" content="follow" />
                <meta name="theme-color" content="#2DCEFF" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="" />
                <meta property="og:keywords" content="" />
                <meta property="og:locale" content="en-US" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
                <meta property="og:image" content="" />
                <title>{title ? `Nova | ${title}` : "Nova"}</title>
                <link rel="icon" href="/fav.jpg" />
            </Head>
            <div className="app">{children}</div>
        </div>
    );
}
