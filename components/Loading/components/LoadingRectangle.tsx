import { Skeleton } from "@mui/material";

export const LoadingRectangle = ({w, h}: {w: number, h: number})=> {
	return (
		<div className="bg-gray-400 w-fit h-fit rounded-4xl flex flex-col gap-1">
			<Skeleton
				className="rounded-4xl"
				variant="rectangular"
				animation="wave"
				width={w}
				height={h}
			/>
		</div>
	)
}