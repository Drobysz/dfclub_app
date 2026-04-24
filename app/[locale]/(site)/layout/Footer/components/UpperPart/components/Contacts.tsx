import styles from "../../../footer.module.scss";
import { SMbar } from "@/components/index"; 
import sm from "@/json/sm_list.json"
import cn from "classnames";
import { useTranslations } from "next-intl";

export const Contacts = ()=> {
	const t = useTranslations('footer');

	return (
		<div className="flex flex-col gap-8">
			<div className={"flex flex-col gap-2"}>
				<h3 className={styles.font_dark}>
					{t('fb_contact')}
				</h3>
				<span className={styles.font_light}>
					DF Club support@gmail.com
				</span>
			</div>
			<div className={"flex flex-col gap-4"}>
				<h3 className={styles.font_dark}>
					{t('contacts')}
				</h3>
				<SMbar SMList={sm}/>
			</div>
		</div>
	)
}