import { LoadingRectangle, LoadingLines } from "./components/index";

export const Loading = ()=> {
	return (
		<div className="flex flex-col gap-3">
			<LoadingRectangle 
				w={364}
				h={222}
			/>
			<LoadingLines />
		</div>
	)
}