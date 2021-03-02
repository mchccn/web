import { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";
import "../style.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
            <style jsx global>{`
                @font-face {
                    font-family: "Cocomat";
                    src: url("/fonts/cocomat.ttf");
                }
            `}</style>
        </div>
    );
}

export default App;
