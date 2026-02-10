import { RefCard } from "./_components";
import cards from "./cards.json";

export const Cards = ()=> {
	return (
		<ul className="flex justify-between w-full">
			{cards.map((c, i) =>
				<RefCard
					key={`ref_card_${i}`}
					order={i + 1}
					title={c.title}
					desc={c.desc}
				/>
			)}
		</ul>
	)
}