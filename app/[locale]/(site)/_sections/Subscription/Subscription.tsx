import { SubscribeCard } from "@/components";
import { SectContainer } from "../../_components/SectContainer/SectContainer";
import { Title } from "./_components/Title";

export const Subscription = ()=> {
	return (
		<SectContainer
			className="flex items-center justify-between"
			bgColor="bg-gray-900"
		>
				<Title />
				<SubscribeCard fit />
		</SectContainer>
	)
}