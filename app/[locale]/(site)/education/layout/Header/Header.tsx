import { useTranslations } from "next-intl";
import cn from "classnames";
import { prime_semibold } from "@/fonts/fonts";
import {
    NavBar,
    Sorting
} from "./_components";

export const Header = ({
    className
}: {
    className?: string
})=> {
    const t = useTranslations('my_courses');

    return (
        <header className={cn(
            className,
            "flex flex-col gap-8 py-12"
        )}>
            <h2 className={cn(
                prime_semibold.className,
                "text-[2.5rem]"
            )}>
                {t('my_courses')}
            </h2>

            <div className="flex justify-between items-center">
                <NavBar />
                <Sorting />
            </div>
        </header>
    )
}