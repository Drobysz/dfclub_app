import { Tick } from "../index";
import services from "./services.json";
import cn from "classnames";
import { prime_medium, prime_regular } from "@/fonts/fonts";

export const SubServices = ({ bgColor }: { bgColor: "green" | "dark" })=> {
	return (
		<div className="text-white flex flex-col gap-4">
			<h4 className={cn(
				prime_medium.className,
				bgColor == "green" && "text-gray-900"
			)}>
				Что включено в подписку: 
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