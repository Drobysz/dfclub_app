"use client";

import { InfoWindowProps } from "./InfoWindow.props";
import styles from "../../ib.module.scss";
import { ModalWindow } from "@/components/index";
import cn from "classnames";

export const InfoWindow = ({ extended, setExtended, children }: InfoWindowProps)=> {
	return (
		<ModalWindow
			className={cn(
				styles.window, "gap-0",
				extended && "gap-4"
			)}
			tag="div"
			onClick={()=> {
				setExtended((v) => !v)
			}}
		>
			{children}
		</ModalWindow>
	)
}