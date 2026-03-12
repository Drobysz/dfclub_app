import { ProjBtn } from "@/components/Btns/ProjBtn"
import { ProgressBtnProps } from "./ProgressBtn.props"

export const ProgressBtn = ({
	cardType,
	progress
}: ProgressBtnProps)=> {
	const isCompleted = progress == 100;
	const colorSet = isCompleted
		? "gr_trsp"
		: "gr_lgt";

	return (
		<ProjBtn
			colorSet={colorSet}
			size="large"
			className="w-full"
		>
			{isCompleted
				? "Пройти заново"
				: `Пройдено: ${progress}% • Продолжить`
			}
		</ProjBtn>
	)
}