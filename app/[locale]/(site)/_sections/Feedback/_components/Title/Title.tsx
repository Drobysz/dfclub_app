import { prime_regular, prime_semibold } from "@/fonts/fonts";
import cn from "classnames";
import styles from "./title.module.scss";
import { Switchers } from "./_components/Switchers";
import { useTranslations } from "next-intl";
import { SwitchProps } from "../../Feedback";

export const Title = ({
	idx,
	setSwitch
}: {
	idx: number,
	setSwitch: (n: SwitchProps)=> void
})=> {
	const t = useTranslations('main');

	return (
		<div className={styles.sect}>
			<h2 className={cn(
				prime_semibold.className,
				styles.header
			)}>
				{t('fb_title1')} <span>{t('fb_title2')}</span>
			</h2>

			<div className="flex flex-col gap-8">
				<p className={cn(
					styles.desc,
					prime_regular.className
				)}>
					{t('fb_subtitle')}
				</p>
				<Switchers
					idx={idx}
					setSwitch={setSwitch}
				/>
			</div>
		</div>
	)
}