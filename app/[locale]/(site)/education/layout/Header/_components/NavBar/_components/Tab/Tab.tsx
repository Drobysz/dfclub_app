'use client';

import { useWindowWidth } from "@/hooks";
import { Tabprops } from "./Tab.props";
import { useContext, useEffect, useRef, useState } from "react";
import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";
import styles from "./tab.module.scss";
import { CursorPosition } from "../../Navbar.props";
import { useRouter } from "next/navigation";
import { EducationContext } from "@/app/[locale]/(site)/education/context/education.context";

export const Tab = ({
    children,
    isActive,
    href,
    total,
    isBarHovered,
    setPosition,
    setPositionClicked
}: Tabprops) => {
    const router = useRouter();
    const { setPage } = useContext(EducationContext);

    const ref = useRef<HTMLLIElement>(null!);
    const [hover, setHover] = useState(false);

    const windowWidth = useWindowWidth();
    const isWindowLess1040 = windowWidth !== null && windowWidth <= 1040;

    useEffect(() => {
        if (windowWidth === null) return;

        const { offsetLeft: left, offsetWidth: width } = ref.current;
        const currPos: CursorPosition = { left, width };

        if (isActive) {
            setPositionClicked(currPos);
            setPosition(currPos);
        }
    }, [isWindowLess1040, windowWidth, isActive, setPosition, setPositionClicked]);

    const getCoords = (): CursorPosition => {
        const { width } = ref.current.getBoundingClientRect();
        const left = ref.current.offsetLeft;

        return { left, width };
    }

    const handleInteraction = (interaction: "hover" | "click") => {
        const nextPos: CursorPosition = getCoords();

        if (interaction === "click") {
            setPositionClicked(nextPos);
            setPage(1);
            router.push(href);
            return;
        }

        setPosition(nextPos);
    };

    const highlighted = isBarHovered
        ? hover
        : isActive

    return (
        <li
            ref={ref}
            onClick={() => handleInteraction("click")}
            onMouseEnter={() => {
                setHover(true);
                handleInteraction("hover");
            }}
            onMouseLeave={() => setHover(false)}
            className={cn(
                styles.tab,
                prime_regular.className, {
                    ["text-gray-950"]: highlighted,
                    ["text-gray-900"]: !highlighted
                }
            )}
        >
            <span>{children}</span>
            <span className={cn(
                styles.total_number_tag, {
                    ['bg-primary-500 text-white']: highlighted,
                    ['bg-gray-100']: !highlighted
                }
            )}>
                {total}
            </span>
        </li>
    );
};