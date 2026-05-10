'use client'

import { useTranslations } from "next-intl";
import { SortListProps } from "./SortList.props";
import { motion, AnimatePresence } from "framer-motion";
import cn from "classnames";
import styles from "./st.module.scss";
import { useRouter } from "@/i18n/navigation";
import { prime_regular } from "@/fonts/fonts";
import { forwardRef, useContext } from "react";
import { CatalogContext } from "@/app/[locale]/(site)/catalog/context/catalog.context";
import { SortType } from "@/interface";

interface SortIdProps {
    id: SortType,
    label: string
}

export const SortList = forwardRef<HTMLUListElement, SortListProps>(
    ({ sorting, open, setOpen }, ref)=> {
        const t = useTranslations('courses');
        const router = useRouter();
        const { setSort } = useContext(CatalogContext);

        const sorts: SortIdProps[] = [
            { id: "popularity", label: t('popularity') },
            { id: "nb_lessons", label: t('nb_lessons') },
            { id: "total_time", label: t('total_time') },
        ];

        const animInitial = { opacity: 0, y: -1 };
        const animOpen = { opacity: 1, y: 7 };

        const handleClick = (s: SortType)=> {
            console.log("worked2")
            setSort(s);
            setOpen(false);
        }

        return (
            <AnimatePresence>
                <motion.ul
                    className={cn(
                        styles.sort_list,
                        prime_regular.className
                    )}
                    initial={animInitial}
                    animate={open ? animOpen : animInitial}
                    exit={animInitial}
                    ref={ref}
                >
                    {sorts.filter(s=> s.id != sorting).map(s=> (
                        <li
                            key={`sort-${s.id}`}
                            onClick={()=> handleClick(s.id)}
                            className={styles.sort_list_el}
                        >
                            {s.label}
                        </li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        )
    }
)

SortList.displayName = "SortList";