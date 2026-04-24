'use client';

import { ProfileIcon } from "@/components/ProfileIcon/ProfileIcon"
import { useContext } from "react"
import styles from "./pd.module.scss";
import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";
import { SiteContext } from "@/app/[locale]/(site)/context/site.context";

export const ProfileData = ()=> {
    const { session } = useContext(SiteContext);

    return (
        <div className={cn(
            styles.prof_sect,
            "border-b-gray-200"
        )}>
            <ProfileIcon
                src={session?.img_url}
                isActive={false}
                size="small"
            />

            <div className={cn(
                styles.prof_txt_data,
                prime_regular.className,
                "text-sm"
            )}>
                <p className={"text-gray-950"}>
                    {session?.name}
                </p>
                <p className={"text-gray-500"}>
                    {session?.email}
                </p>
            </div>
        </div>
    )
}