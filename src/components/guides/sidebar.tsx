import { IGuideProps } from "../../lib/types.js";

export interface ISidebarProps {
    guides: IGuideProps["allGuidesData"];
    open: boolean;
    namespace: string;
    active?: string;
}

export default function Sidebar({ guides, open, namespace, active }: ISidebarProps) {
    return (
        <aside
            className={`sidebar bg-light z-30 border-r border-gray-200 w-56 md:w-64 lg:w-72 p-4 overflow-scroll text-sm sm:text-base lg:text-lg${
                open ? " shadow-md nav-open" : ""
            }`}
        >
            <div>
                {guides.map((category) => (
                    <div key={Math.random()}>
                        <p className="text-lg lg:text-xl opacity-75">{category[0].category}</p>
                        <div className="flex flex-col">
                            {category.map(({ title, id, index }) => (
                                <a
                                    href={`/guides/${namespace}/${id}`}
                                    className={`pl-4 hover:text-softAccent transition-colors${
                                        active === id ? " border-l-2 border-softAccent text-softAccent" : " text-dark"
                                    }`}
                                    key={index}
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
