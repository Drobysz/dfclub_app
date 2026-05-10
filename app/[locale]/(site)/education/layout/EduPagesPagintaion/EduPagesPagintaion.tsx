'use client';

import { useContext } from "react";
import { EducationContext } from "../../context/education.context";
import { PagesPagination } from "@/components";

export const EduPagesPagintaion = ({
    className
}: {
    className: string
})=> {
    const {
        page,
        category,
        sorting,
        pages
    } = useContext(EducationContext);
    return (
        <PagesPagination
            via="link"
            className={className}
            page={page}
            pagesNum={pages}
            link={`/education?category=${category}&sorting=${sorting}`}
        />
    )
}