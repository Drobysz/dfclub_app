'use client';

import { PagesPagination } from "@/components"
import { useContext } from "react";
import { CatalogContext } from "../context/catalog.context";

export const CatalogPagesPagintaion = ()=> {
    const {
        page,
        pagesNum,
        setPage,
    } = useContext(CatalogContext);

    return (
        <PagesPagination
            via="function"
            page={page}
            setPage={setPage}
            pagesNum={pagesNum}
        />
    )
}