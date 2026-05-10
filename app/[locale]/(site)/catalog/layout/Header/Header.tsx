'use client';

import {
    SearchBar,
    Breadcrumbs
} from "@/components";
import { Sorting } from "./_components";
import cn from "classnames";
import { useTranslations } from "next-intl";
import { prime_semibold } from "@/fonts/fonts";

export const Header = ({
    className
}: {
    className?: string
})=> {
    const tp = useTranslations('courses');
    const tbc = useTranslations('breadcrumb');
    const pgs = [
        { label: tbc('main'), link: '/' },
        { label: tbc('catalog'), link: '/courses' },
    ];

    return (
        <header className={cn(
            className,
            prime_semibold.className,
            "flex flex-col gap-12"
        )}>
            <Breadcrumbs
                crumbs={pgs}
            />
            <h2 className="text-[2.5rem]">
                {tp('title')}
            </h2>
            <div className="flex justify-between items-center" >
                <SearchBar
                    placeholder={tp('sb_placeholder')}
                    // setSearchBarRequest={}
                />
                <Sorting />
            </div>
        </header>
    )
}