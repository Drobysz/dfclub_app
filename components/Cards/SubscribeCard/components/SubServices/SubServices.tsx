import { Tick } from "../index";
import services from "./services.json";
import cn from "classnames";
import { prime_medium, prime_regular } from "@/fonts/fonts";
import { useTranslations } from "next-intl";

export const SubServices = ({ bgColor }: { bgColor: "green" | "dark" })=> {
	const t = useTranslations('main');

	const services = [
		t('sub_crd_s1'),
		t('sub_crd_s2'),
		t('sub_crd_s3'),
		t('sub_crd_s4'),
	];

	return (
		<div className="text-white flex flex-col gap-4">
			<h4 className={cn(
				prime_medium.className,
				bgColor == "green" && "text-gray-900"
			)}>
				{t('sub_crd_serv_title')}
			</h4>
			<ul className={cn(
				prime_regular.className,
				"flex flex-col gap-4",
				bgColor == "green" && "text-gray-800"
			)}>
				{services.map((service, idx)=> (
					<li
						key={`id-service-${idx}`}
						className="flex gap-4"
					>
						<Tick />
						<p>{service}</p>
					</li>
				))}
			</ul>
		</div>
	
	)
}