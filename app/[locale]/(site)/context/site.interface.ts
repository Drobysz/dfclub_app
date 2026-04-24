import { UserSession } from "@/interface";
import { Dispatch, SetStateAction } from "react";

export interface SiteContextInterface {
    isModalWindowOpen: boolean;
    session: UserSession | null;

    setModalWindow: Dispatch<SetStateAction<boolean>>;
    setSession: Dispatch<SetStateAction<UserSession>>;
}