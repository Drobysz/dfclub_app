import {
	GreenCard,
	UpperShortCard,
	LowerShortCard,
	DarkCard
} from "./_components";

export const Cards = ()=> {
	return (
		<div className="grid grid-cols-12 gap-8">
			<GreenCard />
			<UpperShortCard />
			<LowerShortCard />
			<DarkCard />
		</div>
	)
}