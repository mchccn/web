import { IDiscordJSProps } from "../../pages/discord.js";

export interface ISidebarProps {
    guides: IDiscordJSProps["allGuidesData"];
    open: boolean;
}

export default function Sidebar({ guides, open }: ISidebarProps) {
    return (
        <aside
            className={`sidebar bg-light z-30 border-r border-gray-200 w-56 md:w-64 lg:w-72 p-4 overflow-scroll text-sm sm:text-base lg:text-lg${
                open ? " shadow-md nav-open" : ""
            }`}
        >
            <div>
                {guides.map(({ title, id, index }) => (
                    <a href={`/discord.js/${id}`} className="text-accent" key={index}>
                        {title}
                    </a>
                ))}
            </div>
        </aside>
    );
}
