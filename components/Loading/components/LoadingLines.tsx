import { LoadingRectangle } from "./LoadingRectangle";

export const LoadingLines = ()=> {
	return (
		<div className="flex flex-col gap-2 pl-3">
			<LoadingRectangle 
				w={250}
				h={10}
			/>
			<LoadingRectangle 
				w={200}
				h={10}
			/>
			<LoadingRectangle 
				w={200}
				h={10}
			/>
		</div>
	)
}