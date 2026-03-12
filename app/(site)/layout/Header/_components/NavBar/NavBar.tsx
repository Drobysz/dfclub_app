'use client'

import { useState } from "react";
import { usePathname } from "next/navigation";

import {
    Cursor,
    Tab
} from "./_components";

import styles from "./nb.module.scss";
import { CursorPosition } from "./Navbar.props";

export const NavBar = () => {
    // const { sessionData } = useContext(SiteContext);

    // const baseTabs = [
    //     { href: '/',       label: 'main page' },
    //     { href: '/seller', label: 'about the seller' },
    //     { href: '/shop',   label: 'shop' },
    // ];
    // const authTabs = [
    //     { href: '/inventory', label: 'inventory' },
    //     // { href: '/basket',    label: 'basket' },
    // ];

    // const tabs = sessionData !== undefined
    //     ? [...baseTabs, ...authTabs]
    //     : baseTabs;

    const tabs = [
        { href: '/courses', label: 'Каталог' },
        { href: '/',        label: 'О клубе' },
        { href: '/FAQ',     label: 'FAQ' },
    ];

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
  