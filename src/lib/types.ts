export interface IGuideProps {
    allGuidesData: {
        id: string;
        title: string;
        category: string;
        index: number;
    }[][];
}

export interface IGuideIdProps extends IGuideProps {
    guideData: {
        id: string;
        index: number;
        title: string;
        category: string;
        htmlContent: string;
    };
}
