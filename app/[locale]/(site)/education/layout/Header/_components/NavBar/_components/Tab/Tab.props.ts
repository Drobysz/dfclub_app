import { ReactNode } from "react";
import { CursorPosition } from "../../Navbar.props";

export interface Tabprops {
    children: ReactNode;
    href: string;
    total: number;
    isActive: boolean;
    isBarHovered: boolean;
    setPosition: ( PosProps : CursorPosition )=> void;
    setPositionClicked: ( PosProps : CursorPosition )=> void;
};