'use client';

import { useSearchParams } from "next/navigation";
import { ReactNode, createContext } from "react";
import mock from "../mock_data.json"

import { Category, SortType } from "@/interface/MyCourses.interface";
import { CourseCardData } from "@/interface";
import { useRouter } from "@/i18n/navigation";

type categoryNumbersType = {
    active: number,
    completed: number,
    favourites: number,
};

interface EducationContextInterface {
    pages: number;
    visibleCourses: CourseCardData[];
    category: Category;
    page: number;
    sorting: SortType;
    categoryNumbers: categoryNumbersType


    setSorting: (sorting: SortType)=> void;
    setPage: (n: number)=> void;
}

export const EducationContext = createContext<EducationContextInterface>({
    sorting: "old",
    pages: 1,
    visibleCourses: [],
    category: "active",
    page: 1,
    categoryNumbers: {
        active: 0,
        completed: 0,
        favourites: 0
    },

    setSorting: () => {},
    setPage: () => {}
})

export const EducationContextProvider = ({children}: {children: ReactNode})=> {

    const categoryMap = {
        active: "active",
        completed: "completed",
        favourites: "favorites",
    } as const;

    const router = useRouter();
    const sp = useSearchParams();

    // url params
    const category = (sp.get("category") ?? "active") as Category;
    const page = Number(sp.get("page") ?? 1);
    const sorting = (sp.get("sorting") ?? "new") as SortType;

    const setSorting = (sorting: SortType)=> {
        router.push(`/education?category=${category}&page=${page}&sorting=${sorting}`);
    };
    const setPage = (n: number)=> {
        router.push(`/education?category=${category}&page=${n}&sorting=${sorting}`);   
    }

    // courses
    const courses: CourseCardData[] = (mock.data[categoryMap[category]] as CourseCardData[]).toSorted((a, b) => {
        if (sorting === "new") {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

    const categoryNumbers = {
        active: mock.data.active.length,
        completed: mock.data.completed.length,
        favourites: mock.data.favorites.length,
    };

    // page courses
    const limit = 6;
    const start = limit * (page - 1);
    const visibleCourses = courses.slice(start, start + limit);

    const pages = (Math.ceil(courses.length / limit));

    return (
        <EducationContext.Provider
            value={{
                sorting: sorting,
                pages: pages,
                visibleCourses,
                category: category,
                page: page,
                categoryNumbers: categoryNumbers,

                setSorting,
                setPage
            }}
        >
            {children}
        </EducationContext.Provider>
    )
}