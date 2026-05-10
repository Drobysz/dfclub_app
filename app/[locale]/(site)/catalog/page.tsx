'use client';

import { useContext, useEffect, useMemo } from "react";
import { CatalogContext } from "./context/catalog.context";
import { mockCourseCards } from "./mock_data";
import { CourseCard } from "@/components";
import { CatalogPagesPagintaion } from "./_components";

export default function CatalogPage () {
    const {
        sort,
        debouncedCatalog,
        searchReq,
        page,
        setPagesNum
    } = useContext(CatalogContext);

    const filteredCourseCards = useMemo(()=> {
        const filteredBySearchReq = searchReq !== ""
            ? mockCourseCards.filter(
                c=> c.title.trim().toLowerCase().includes(searchReq.trim().toLowerCase())
            )
            : mockCourseCards;
        
        const sortCourseCards = filteredBySearchReq.sort((a, b)=> {
            switch (sort) {
                case "popularity":
                    return b.rating - a.rating;
                
                case "nb_lessons":
                    return b.nbCourses - a.nbCourses;

                case "total_time":
                    return b.total_time - a.total_time;
            }
        });

        return sortCourseCards
    }, [sort, debouncedCatalog, searchReq]);

    const COURSES_PER_PAGE = 6;

    useEffect(()=> {
        setPagesNum(Math.ceil(filteredCourseCards.length / COURSES_PER_PAGE))
    }, [mockCourseCards]);

    const startIdx = (page - 1) * COURSES_PER_PAGE;
    const pageCourseCards = filteredCourseCards.slice(startIdx, startIdx + COURSES_PER_PAGE)

    return (
        <section className="flex flex-col gap-16">
            <ul className="grid grid-cols-2 grid-rows-3 gap-8">
                {pageCourseCards.map(c=> (
                    <CourseCard
                        key={`course_card_${c.id}`}
                        speaker={c.speaker}
                        nbCourses={c.nbCourses}
                        rating={c.rating}
                        cardType={c.cardType}
                        total_time={c.total_time}
                        liked={c.liked}
                        title={c.title}
                        complexity={c.complexity}
                        category={c.category}
                    />
                ))}
            </ul>
            <CatalogPagesPagintaion />
        </section>
    )
}