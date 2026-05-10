'use client';

import { ModalWindow } from "@/components";
import { catalogData } from "../../catalog";
import cn from "classnames";
import { prime_medium, prime_regular, prime_semibold } from "@/fonts/fonts";
import { useTranslations } from "next-intl";

export const AsideMenu = ({
    className
}: {
    className?: string
})=> {
    const t_titres = useTranslations('catalog.titres');
    const t_labels = useTranslations('catalog.labels');

    const catalogTotal = [
        {...catalogData.category},
        {...catalogData.difficulty},
        {...catalogData.duration},
        {...catalogData.learningType},
    ];

    return (
        <aside className={className}>
            <ModalWindow
                tag="div"
                className={cn(prime_regular.className)}
            >
                {catalogTotal.map(ctgr => (
                    <div
                        key={ctgr.id}
                    >
                        <h3
                            className={cn(
                                prime_medium.className
                            )}
                        >
                            {t_titres(ctgr.id)}
                        </h3>
                        <ul>
                            {ctgr.options.map(opt=> (
                                <li
                                    key={`opt-${opt}`}
                                >
                                    {t_labels(opt)}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ModalWindow>
        </aside>
    )
}