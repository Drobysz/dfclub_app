import { SectContainer } from "../../_components/SectContainer/SectContainer";
import styles from "./ref.module.scss";
import {
	Title,
	Cards
} from "./_components";

export const Referal = ()=> {
	return (
		<SectContainer
			className={styles.ref}
			bgColor="bg-primary-500"
		>
			<Title />
			<Cards />
		</SectContainer>
	)
}