'use client';

import { useTranslations } from "next-intl";
import { Category, SortType } from "@/interface/MyCourses.interface";
import Arrow from "@/assets/arrow-right-1.svg";
import { inter_regular } from "@/fonts/fonts";
import cn from "classnames";
import styles from "./sorting.module.scss";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

export const Sorting = ()=> {
    const t = useTranslations('my_courses');
    const router = useRouter();
    const sp = useSearchParams();

    const category = (sp.get("category") ?? "active") as Category;
    const page = Number(sp.get("page") ?? 1);
    const sorting = (sp.get("sorting") ?? "new") as SortType;

    const nextSorting = sorting == 'new' ? 'old' : 'new';
    const setSorting = ()=> {
        router.push(`/education?category=${category}&sorting=${nextSorting}&page=${page}`);
    };

    return (
        <button
            type="button"
            className={cn(
                styles.sorting_btn,
                inter_regular.className
            )}
            onClick={()=> setSorting()}
        >
            <span>
                {t('sort_by')}
            </span>
            <span className={styles.sorting_btn_sign}>
                <span>
                    {sorting == "new"
                        ? t('new')
                        : t('old')
                    }
                </span>
                <span className={cn(styles.sorting_btn_arrow, {
                    ["rotate-90 translate-y-[0.08rem]"]: sorting == "new",
                    ["-rotate-90 -translate-y-[0.1rem]"]: sorting == "old"
                })}>
                    <Arrow />
                </span>
            </span>
        </button>
    )
}