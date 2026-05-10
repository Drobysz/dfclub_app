'use client'

import { useContext, useState } from "react";
import {
    Cursor,
    Tab
} from "./_components";

import styles from "./nb.module.scss";
import { CursorPosition } from "./Navbar.props";
import { SiteContext } from "@/app/[locale]/(site)/context/site.context";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

export const NavBar = () => {
    const { session } = useContext(SiteContext);
    const t = useTranslations('header');

    const baseTabs = [
        { href: '/',        label: t('club') },
        { href: '/catalog', label: t('catalog') },
        // { href: '/FAQ',     label: 'FAQ' },
    ];
    const authTabs = [
        { href: '/education',   label: t('education') },
        { href: '/finances',    label: t('finances') },
        { href: '/partnership', label: t('partner') },
    ];

    const tabs = session !== null
        ? [...baseTabs, ...authTabs]
        : baseTabs;

    const pathname = usePathname();
    const defaultCoord = { left: 0, width: 0 };

    const [position, setPosition] = useState<CursorPosition>(defaultCoord);
    const [positionClicked, setPositionClicked] = useState<CursorPosition>(defaultCoord);
    const [hover, setHover] = useState(false);

    return (
        <nav>
            <ul
                onMouseEnter={()=> setHover(true)}
                onMouseLeave={() => {
                    setPosition(positionClicked);
                    setHover(false);
                }}
                className={styles.navbar_body}
            >
                {tabs.map((tab) => (
                        <Tab
                            key={tab.href}
                            href={tab.href}
                            isActive={pathname === tab.href}
                            isBarHovered={hover}
                            setPosition={setPosition}
                            setPositionClicked={setPositionClicked}
                        >
                            {tab.label}
                        </Tab>
                ))}

                <Cursor position={position} />
            </ul>
        </nav>
    );
};
  