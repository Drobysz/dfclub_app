import {
	Header,
	Desc,
	Btn
} from "./_components"

export const Title = ()=> {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4.5">
				<Header />
				<Desc />
			</div>
			<Btn />
		</div>
	)
}