import { SectContainer } from "../../_components/SectContainer/SectContainer";
import {
	Title,
	CourseCards,
	Btn
} from "./_components";

export const Courses = ()=> {
	return (
		<SectContainer
			bgColor="bg-gray-100"
			className="flex flex-col items-center gap-16"
		>
			<Title />
			<CourseCards />
			<Btn />
		</SectContainer>
	)
}