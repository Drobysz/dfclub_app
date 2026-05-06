import { ReactNode } from "react";
import {
    Header,
    EduPagesPagintaion
} from "./layout/index";
import { EducationContextProvider } from "./context/education.context";
import styles from "./edu_grid.module.scss";

export default function EducationLayout({
	children
}: Readonly<{
  children: ReactNode;
}>) {
	return (
		<EducationContextProvider>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <div className={styles.courses} >
          {children}
        </div>
        <EduPagesPagintaion className={styles.page_switcher}/>
      </div>
    </EducationContextProvider>
	)
}