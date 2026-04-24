import styles from "./title.module.scss";
import {
	Header,
	Desc
} from "./_components";

export const Title = ()=> {
	return (
		<div className={styles.title}>
			<Header />
			<Desc />
		</div>
	)
}