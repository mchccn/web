import fs from "fs";
import matter from "gray-matter";
import path from "path";
import remark from "remark";
import html from "remark-html";

const guidesDirectory = path.join(process.cwd(), "guides", "djs");

export function getGuidesData() {
    const fileNames = fs.readdirSync(guidesDirectory);

    //@ts-ignore
    const allGuidesData: {
        id: string;
        title: string;
        category: string;
        index: number;
    }[] = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(guidesDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    const categories = ["welcome", "getting started", "aeroclient"];

    //@ts-ignore
    const categorySort = allGuidesData.sort(
        (a, b) => categories.indexOf(a.category.toLowerCase()) - categories.indexOf(b.category.toLowerCase())
    );

    //@ts-ignore
    return categorySort
        .reduce(
            (acc, { category }, i) =>
                category !== (categorySort[i - 1] || {}).category
                    ? (() => {
                          let firstIdx = i;
                          let prev = categorySort[firstIdx].category;

                          while ((categorySort[firstIdx++] || {}).category === prev) {
                              prev = (categorySort[firstIdx - 1] || {}).category;

                              if (firstIdx > categorySort.length) break;
                          }

                          acc.push(categorySort.slice(i, firstIdx - 1));

                          return acc;
                      })()
                    : acc,
            [] as typeof allGuidesData[]
        )
        .map((guides) => guides.sort((a, b) => a.index - b.index));
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

export function getAllGuideIds() {
    const fileNames = fs.readdirSync(guidesDirectory);

    return fileNames.map((fileName) => ({
        params: {
            id: fileName.replace(/\.md$/, ""),
        },
    }));
}
