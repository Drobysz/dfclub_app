import { ReactNode } from "react";
import {
    Header,
    AsideMenu
} from "./layout/index";
import styles from "./catalog_grid.module.scss";
import { CatalogContextProvider } from "./context/catalog.context";

export default function EducationLayout({
	children
}: Readonly<{
  children: ReactNode;
}>) {
	return (
        <CatalogContextProvider>
            <div className={styles.wrapper}>
                <Header className={styles.header} />
                <AsideMenu className={styles.aside_menu}/>
                <div className={styles.courses}>
                    {children}
                </div>
            </div>
        </CatalogContextProvider>
	)
}