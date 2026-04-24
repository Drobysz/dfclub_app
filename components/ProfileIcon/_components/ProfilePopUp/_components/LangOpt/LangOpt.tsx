'use client';

import Global from "@/assets/ language.svg"
import { language } from "@/interface/UserData.interface";
import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";
import styles from "./lo.module.scss";
import { ChangeEvent, useContext } from "react";
import { SiteContext } from "@/app/[locale]/(site)/context/site.context";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export const LangOpt = ()=> {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const t = useTranslations('header');

    const { setSession } = useContext(SiteContext);

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            router.replace(pathname, { locale: newLocale });
            router.refresh();
        }
    };
    const handleChange = (e: ChangeEvent<HTMLSelectElement>)=> {
        const lang = e.target.value as language;

        setSession(prev => {
            if (!prev) return prev;
            return {
                ...prev,
                language: lang
            };

        });

        switchLocale(lang);
    };

    return (
        <div>
            <label
                aria-expanded="false"
                aria-controls="language-list"
                className={cn(
                    styles.lang_opt_sect,
                    prime_regular.className
                )}
            >
                <span>{t('lang')}</span>
                <span className={styles.lang_opt}>
                    <select
                        className={styles.custom_select}
                        onChange={handleChange}
                        value={locale}
                    >
                        <option value='ru'>Русский</option>
                        <option value='en'>English</option>
                    </select>
                    <Global />
                </span>
            </label>
        </div>
    )
}