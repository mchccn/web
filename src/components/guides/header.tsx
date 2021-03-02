import { debounce } from "lodash";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Header({
    open,
    setOpen,
    title,
    home,
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
    home: string;
}) {
    const [width, setWidth] = useState(2048);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        const debouncedHandleResize = debounce(handleResize, 50);

        window.addEventListener("resize", debouncedHandleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    }, []);

    return (
        <header className="bg-light z-50 shadow-md p-4 h-16 flex items-center justify-between">
            <div className="flex items-center">
                {width < 660 ? (
                    <div
                        className="hamburger flex flex-col justify-between h-5 w-6 mr-3 cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        <div className="w-full bg-gray-900"></div>
                        <div className="w-full bg-gray-900"></div>
                        <div className="w-full bg-gray-900"></div>
                    </div>
                ) : null}
                <a href="/">
                    <h3 className="cocomat-title text-3xl mr-4">
                        N<span className="text-accent">o</span>va
                    </h3>
                </a>
                <a href={`/guides/${home}`}>
                    <h3 className="text-2xl sans font-light">{title}</h3>
                </a>
            </div>
        </header>
    );
}
