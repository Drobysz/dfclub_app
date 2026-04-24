import { prime_regular } from "@/fonts/fonts";
import Link from "next/link";
import cn from "classnames";
import styles from "./pl.module.scss";
import { useTranslations } from "next-intl";

export const ProfileLinks = ()=> {
    const t = useTranslations('header');

    const profileLinks = [
        { href: "/profile", title: t('my_profile') },
        { href: "/profile/settings", title: t('settings') },
        { href: "/profile/subscription", title: t('my_sub') },
        { href: "/profile/help", title: t('help') },
    ];
    
    return (
        <ul>
            {profileLinks.map(({href, title})=> 
                <li
                    key={`key-${title}`}
                    className={cn(
                        prime_regular.className,
                        styles.ul_sect,
                        "before:bg-primary-100",
                    )}
                >
                    <Link
                        key={`key-${title}`}
                        href={href}
                        className="hover:text-primary-700 w-full"
                    >
                        <p className="px-4 py-3.5">{title}</p>
                    </Link>
                </li>
            )}
        </ul>
    )
}