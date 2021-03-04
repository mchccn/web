export interface IGuideProps {
    allGuidesData: {
        id: string;
        index: number;
        title: string;
        category: string;
        author: string;
        updatedAt: string;
    }[][];
}

export interface IGuideIdProps extends IGuideProps {
    guideData: {
        id: string;
        index: number;
        title: string;
        category: string;
        author: string;
        updatedAt: string;
        htmlContent: string;
    };
}
