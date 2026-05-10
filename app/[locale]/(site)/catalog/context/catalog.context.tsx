'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import { catalogData } from "../catalog";
import { CourseFilters } from "@/interface/Filters.interface";
import { SortType } from "@/interface";

interface CatalogContextInterface {
    searchReq: string,
    sort: SortType,
    catalog: CourseFilters,
    debouncedCatalog: CourseFilters,
    page: number,
    pagesNum: number,

    setSearchReq: Dispatch<SetStateAction<string>>,
    setSort: Dispatch<SetStateAction<SortType>>,
    setCatalog: Dispatch<SetStateAction<CourseFilters>>,
    setDebouncedCatalog: Dispatch<SetStateAction<CourseFilters>>,
    setPage: Dispatch<SetStateAction<number>>,
    setPagesNum: Dispatch<SetStateAction<number>>,
}

export const CatalogContext = createContext<CatalogContextInterface>({
    searchReq:          "",
    sort:               "popularity",
    catalog:            catalogData,
    debouncedCatalog:   catalogData,
    page:               1,
    pagesNum:           0,

    setSearchReq:          ()=> {},
    setSort:               ()=> {},
    setCatalog:            ()=> {},
    setDebouncedCatalog:   ()=> {},
    setPage:               ()=> {},
    setPagesNum:           ()=> {},
})

export const CatalogContextProvider = ({children}: {children: ReactNode})=> {
    const [searchReq, setSearchReq] = useState("");
    const [sort, setSort] = useState<SortType>("popularity");
    const [catalog, setCatalog] = useState<CourseFilters>(catalogData);
    const [debouncedCatalog, setDebouncedCatalog] = useState<CourseFilters>(catalogData);
    const [page, setPage] = useState(1);
    const [pagesNum, setPagesNum] = useState(0);

    // const isFirstRender = useRef(true);

    useEffect(()=> {
        const timeoutId = setTimeout(() => {
            setDebouncedCatalog(catalog);
        }, 400);

        return ()=> clearTimeout(timeoutId);
    }, [catalog]);

    // useEffect(()=> {
    //     if (isFirstRender.current) {
    //         isFirstRender.current = false;
    //         return;
    //     }
        
        
    // }, [searchReq, sort, catalog]);
    
    return (
        <CatalogContext.Provider
            value={{
                searchReq:        searchReq,
                sort:             sort,
                catalog:          catalog,
                debouncedCatalog: debouncedCatalog,
                page:             page,
                pagesNum:         pagesNum,

                setSearchReq,
                setSort,
                setCatalog,
                setDebouncedCatalog,
                setPage,
                setPagesNum
            }}
        >
            {children}
        </CatalogContext.Provider>
    )
}