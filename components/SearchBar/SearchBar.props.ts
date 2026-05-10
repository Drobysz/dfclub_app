export interface SearchBarProps {
    placeholder: string;
    colorMode?: "light" | "dark";
    className?: string;
    widthMode?: "short" | "long";
    setSearchBarRequest: (e: string)=> void;
}