import styles from "../../../footer.module.scss";
import { SMbar } from "@/components/index"; 
import sm from "@/json/sm_list.json"
import cn from "classnames";

export const Contacts = ()=> {
	const spacing = "flex flex-col";
	return (
		<div className="flex flex-col gap-8">
			<div className={cn(spacing, "gap-2")}>
				<h3 className={styles.font_dark}>
					Обратная связь
				</h3>
				<span className={styles.font_light}>
					DF Club support@gmail.com
				</span>
			</div>
			<div className={cn(spacing, "gap-4")}>
				<h3 className={styles.font_dark}>
					Контакты
				</h3>
				<SMbar SMList={sm}/>
			</div>
		</div>
	)
}