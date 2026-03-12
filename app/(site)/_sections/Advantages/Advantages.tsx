import { SectContainer } from "../../_components/SectContainer/SectContainer";
import {
	Title,
	Cards
} from "./_components";

export const Advantages = ()=> {
	return (
		<SectContainer
			className="flex flex-col gap-16"
		>
			<Title />
			<Cards />
		</SectContainer>
	)
}