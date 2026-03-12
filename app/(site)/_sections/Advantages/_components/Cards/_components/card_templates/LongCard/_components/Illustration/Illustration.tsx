import Image from "next/image";
import { ProgressTag } from "./_compoents/ProgressTag";

export const Illustration = ({
	hover
}: {
	hover: boolean
})=> {
	return (
		<div className="self-end relative">
			<Image
				src="/course_program.svg"
				alt="course program icon"
				width={420}
				height={235}
			/>
			<ProgressTag
				hover={hover}
			/>
		</div>
	)
}