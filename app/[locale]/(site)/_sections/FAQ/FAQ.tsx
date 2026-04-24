import { SectContainer } from "../../_components/SectContainer/SectContainer";
import { Answers, Title } from "./_components";

export const FAQ = ()=> {
	return (
		<SectContainer
			className="flex justify-between items-start"
			bgColor="bg-gray-100"
		>
			<Title />
			<Answers />
		</SectContainer>
	)
}