import styles from "../../footer.module.scss";
import {
	Logo,
	Pages,
	Contacts
} from "./components/index";

export const UpperPart = ()=> {
	return (
		<div className={styles.upper}>
			<Logo />
			<Pages />
			<Contacts />
		</div>
	)
}
