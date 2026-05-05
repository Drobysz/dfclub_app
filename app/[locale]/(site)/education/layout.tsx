import { ReactNode } from "react";
import {
    Header,
    PagesPagination
} from "./layout/index";
import { EducationContextProvider } from "./context/education.context";
import styles from "./edu.module.scss";

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
        <PagesPagination className={styles.page_switcher}/>
      </div>
    </EducationContextProvider>
	)
}