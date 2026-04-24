import User from "@/assets/user.svg";
import styles from "../pi.module.scss";
import cn from "classnames";

export const UserImg = ({
    src,
    size
}: {
    src?: string,
    size: "middle" | "small",
})=> {
    return (
        <div className={cn(
            styles.user_icon,
            "bg-primary-100 text-primary-500", {
                ["w-10 h-10"]: size == "middle",
                ["w-8 h-8"]: size == "small",
            }
        )}>
            {src == undefined && <User />}
            {src != undefined && <div
                className="w-full h-full"
                style={{ 
                    backgroundImage: `url("${src}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                }}
            />}
        </div>
    )
}