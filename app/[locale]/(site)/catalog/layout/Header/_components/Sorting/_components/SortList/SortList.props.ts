import { HTMLMotionProps } from "framer-motion";

export interface SortListProps extends HTMLMotionProps<"ul"> {
    sorting: string;
    open: boolean;
    setOpen: (open: boolean)=> void;
}