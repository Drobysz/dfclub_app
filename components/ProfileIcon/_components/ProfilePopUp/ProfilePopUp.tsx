import { ModalWindow } from "@/components";
import styles from "./ppu.module.scss";
import {
    ProfileData,
    ProfileLinks,
    LangOpt,
    LogOutBtn
} from "./_components"; 
import { DetailedHTMLProps, HTMLAttributes } from "react";

type PPUprops = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ProfilePopUp = ({...props}: PPUprops)=> {
    return (
        <ModalWindow
            tag="div"
            className={styles.window}
            role="menu"
            {...props}
        >
            <ProfileData />
            <ProfileLinks />
            <LangOpt />
            <LogOutBtn />
        </ModalWindow>
    )
}