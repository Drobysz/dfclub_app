import { ModalWindow } from "@/components/ModalWindow/ModalWindow";
import { BodyProps } from "./Body.props";
import styles from "./body.module.scss";
import cn from "classnames";

export const Body = ({
	children,
	cardType
}: BodyProps)=> {
	return (
		<ModalWindow
			className={styles.body}
			tag="div"
		>
			{children}
		</ModalWindow>
	)
}