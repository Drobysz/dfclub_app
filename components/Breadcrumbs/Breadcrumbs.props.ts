interface Crumb {
    label: string;
    link: string;
}

export interface BreadcrumbsProps {
    crumbs: Crumb[];
}