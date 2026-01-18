import { GleamingCard } from "@/components/index";
import { 
	SubscribeBtn,
	SubscribeTag,
	Price,
	SubServices,
	ShortDescription
} from "./components/index";

export const SubscribeCard = ()=> {
	return (
		<GleamingCard className="p-8 h-fit w-99.25 flex flex-col gap-6">
			<div className="flex flex-col gap-8">
				<SubscribeTag />
				<Price />
			</div>
			<ShortDescription />
			<SubscribeBtn />
			<SubServices />
		</GleamingCard>
	)
}