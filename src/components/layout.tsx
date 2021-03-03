import Head from "next/head";

export interface ILayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function Layout({ children, title }: ILayoutProps) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Open source projects, guides, and software for beginning developers." />
                <meta name="keywords" content="nova,open-source,software" />
                <meta name="author" content="cursorsdottsx" />
                <meta name="copyright" content="" />
                <meta name="robots" content="follow" />
                <meta name="theme-color" content="#2DCEFF" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="novaopensource.vercel.app" />
                <meta property="og:site_name" content="Nova Open Source" />
                <meta property="og:keywords" content="nova,open-source,software" />
                <meta property="og:locale" content="en-US" />
                <meta property="og:title" content="Nova Open Source" />
                <meta
                    property="og:description"
                    content="Open source projects, guides, and software for beginning developers."
                />
                <meta property="og:image" content="/nova.png" />
                <title>{title ? `Nova | ${title}` : "Nova"}</title>
                <link rel="icon" href="/fav.jpg" />
                <link rel="preload" href="/fonts/cocomat.ttf" as="font" crossOrigin="" />
            </Head>
            <div className="app">{children}</div>
        </div>
    );
}
