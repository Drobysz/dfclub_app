import { ReactNode } from "react";
import { 
	OpacityWrapper,
	Header,
	Footer
} from "./layout/index";
import styles from "./layout/GridLayout.module.scss";

export default function SiteLayout({
	children
}: Readonly<{
  children: ReactNode;
}>) {
	return (
		<OpacityWrapper className={styles.wrapper}>
			<Header className={styles.header}/>
			<main className={styles.main}>
				{children}
			</main>
			<Footer className={styles.footer}/>
		</OpacityWrapper>
	)
}