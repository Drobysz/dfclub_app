'use client'

import { useContext, useState } from "react";
import {
    Cursor,
    Tab
} from "./_components";
import styles from "./nb.module.scss";
import { CursorPosition } from "./Navbar.props";
import { useTranslations } from "next-intl";
import { EducationContext } from "../../../../context/education.context";

export const NavBar = () => {
    const t = useTranslations('my_courses');

    const {
        category,
        categoryNumbers
    } = useContext(EducationContext);

    const tabs = [
        { href: 'category=active',     label: t('active'),     tag: 'active',     total:  categoryNumbers.active },
        { href: 'category=completed',  label: t('completed'),  tag: 'completed',  total:  categoryNumbers.completed },
        { href: 'category=favourites', label: t('favourites'), tag: 'favourites', total:  categoryNumbers.favourites },
    ];

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
                            href={'education?' + tab.href}
                            total={tab.total}
                            isActive={category === tab.tag}
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
  