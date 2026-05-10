'use client';

import cn from "classnames";
import { SearchBarProps } from "./SearchBar.props";
import styles from "./sb.module.scss";
import { prime_regular } from "@/fonts/fonts";
import { KeyboardEvent } from "react";

export const SearchBar = ({
    placeholder,
    colorMode = "dark",
    className,
    widthMode = "long",
    setSearchBarRequest
}: SearchBarProps)=> {
    const setValue = (e: KeyboardEvent<HTMLInputElement>)=> {
        const value = e.currentTarget.value;

        if (e.key == "Enter" && value !== "") {
            setSearchBarRequest(value);
        }
    };

    return (
        <input
            type="text"
            className={cn(
                className,
                prime_regular.className,
                "focus:outline-primary-300",
                styles.search_bar, {
                    [cn("bg-white", styles.shadow_bg)]: colorMode == "light",
                    ["bg-gray-100"]: colorMode == "dark",
                    ["w-[50%]"]: widthMode == "long",
                    ["w-92.5"]: widthMode == "short",
                }
            )}
            placeholder={placeholder}
            onKeyDown={setValue}
        />
    )
}