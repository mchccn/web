import fs from "fs";
import matter from "gray-matter";
import path from "path";
import remark from "remark";
import html from "remark-html";

const guidesDirectory = path.join(process.cwd(), "guides", "djs");

export function getGuidesData() {
    const fileNames = fs.readdirSync(guidesDirectory);
    const allGuidesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(guidesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    //@ts-ignore
    return allGuidesData.sort((a, b) => a.index - b.index);
}

export async function getGuideData(id: string) {
    try {
        const fullPath = path.join(guidesDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        const processedContent = await remark().use(html).process(matterResult.content);
        const htmlContent = processedContent.toString();

        return {
            id,
            htmlContent,
            ...matterResult.data,
        };
    } catch {
        return undefined;
    }
}
