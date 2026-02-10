import { InfoBlock } from "@/components";
import faq from "@/json/FAQ.json";

export const Answers = ()=> {
	return (
		<div className="flex flex-col gap-4 w-150">
			{faq.map((bl, idx)=>
				<InfoBlock
					key={`id-${idx}-${bl.title}`}
					title={bl.title}
					text={bl.answer}
				/>
			)}
		</div>
	)
}