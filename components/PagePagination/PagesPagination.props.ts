import { Dispatch } from "react";

export interface PagesPaginationProps {
    via: "link" | "function",
    link?: string;
    setPage?: Dispatch<React.SetStateAction<number>>,
    page: number;
    pagesNum: number;
    className?: string;
}