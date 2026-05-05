'use client';

import { CourseCard } from "@/components";
import { cardTypes, complexities } from "@/interface";
import { useContext } from "react";
import { EducationContext } from "./context/education.context";

export default function EduPage () {
    const { visibleCourses } = useContext(EducationContext);

    return (
        <ul className="grid grid-cols-3 gap-10 overflow-y-scroll p-4 pb-12">
            {visibleCourses.map(c=> (
                <CourseCard
                    key={c.id}
                    cardType={c.cardType as cardTypes}
                    speaker={c.speaker}
                    nbCourses={c.nbCourses}
                    rating={c.rating}
                    title={c.title}
                    total_time={c.total_time}
                    time_completed={"time_completed" in c ? c.time_completed : undefined}
                    complexity={c.complexity as complexities}
                    liked={c.liked}
                />
            ))}
        </ul>
    )
}