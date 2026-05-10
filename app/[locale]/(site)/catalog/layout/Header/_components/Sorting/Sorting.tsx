'use client';

import { useTranslations } from "next-intl";
import { inter_regular } from "@/fonts/fonts";
import cn from "classnames";
import styles from "./sorting.module.scss";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import {
    Arrow,
    SortList
} from "./_components"
import { CatalogContext } from "../../../../context/catalog.context";

export const Sorting = ()=> {
    const t = useTranslations('courses');
    const sp = useSearchParams();
    const [open, setOpen] = useState(false);

    // const sorting = (sp.get('sorting') ?? "popularity")
    const { sort } = useContext(CatalogContext);

    const triggerRef = useRef<HTMLDivElement | null>(null);
    const sortListRef = useRef<HTMLUListElement | null>(null);

    useEffect(()=>{
            if (!open) return;
    
            const handleMouseClick = (e: MouseEvent)=> {
                const target = e.target as Node;
    
                if (
                    triggerRef.current?.contains(target) ||
                    sortListRef.current?.contains(target)
                ) {
                    console.log("worked");
                    return;
                }
    
                setOpen(false);
            };
    
            const handleKeyDown = (e: KeyboardEvent)=> {
                if (e.key === 'Escape') {
                    setOpen(false);
                }
            };
    
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleMouseClick);
    
            return ()=> {
                document.removeEventListener('keydown', handleKeyDown);
                document.removeEventListener('mousedown', handleMouseClick);
            }
    
        }, [open]);

    return (
        <div
            className="relative"
            ref={triggerRef}
        >
            <button
                className={cn(
                    styles.sorting_btn,
                    inter_regular.className
                )}
                onClick={()=> setOpen(p=>!p)}
                type="button"
            >
                <span>
                    {t('sort_by')}
                </span>
                <span className={styles.sorting_btn_sign}>
                    <span>
                        {t(sort)}
                    </span>
                    <Arrow open={open} />
                </span>
            </button>
            <SortList
                open={open}
                setOpen={setOpen}
                sorting={sort}
                ref={sortListRef}
            />
        </div>
    )
}