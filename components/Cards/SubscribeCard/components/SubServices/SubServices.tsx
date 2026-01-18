import { Tick } from "../index";
import services from "./services.json";
import cn from "classnames";
import { prime_medium, prime_regular } from "@/fonts/fonts";

export const SubServices = ()=> {
	return (
		<div className="text-white flex flex-col gap-4">
			<h4 className={prime_medium.className}>
				Что включено в подписку: 
			</h4>
			<ul className={cn(
				prime_regular.className,
				"flex flex-col gap-4"
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