import { BreadcrumbsProps } from "./Breadcrumbs.props";
import Arrow from "@/assets/arrow-right-1.svg";
import { UnderlinedInnerLink } from "@/components";
import styles from "./bc.module.scss";
import { Fragment } from "react/jsx-runtime";
import { prime_regular } from "@/fonts/fonts";

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps)=> {
    return (
        <nav
            aria-label="Breadcrumb"
            className={prime_regular.className}
        >
            <ol className={styles.breadcrumbs_list}>
                {crumbs.map(c=> (
                    <Fragment key={`crumb-${c.link}`}>
                        <li
                            aria-hidden="true"
                            className="flex items-center gap-2"
                        >
                            <Arrow />
                            <UnderlinedInnerLink
                                href={c.link}
                                colorLine="dark"
                            >
                                {c.label}
                            </UnderlinedInnerLink>
                        </li>
                    </Fragment>
                ))}
            </ol>
        </nav>
    )
}