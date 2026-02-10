import Image from "next/image"

export const Images = ()=> {
	return (
		<>
			{Array(3).fill(true).map((_, i)=>
				<div
					key={`ebalnik-${i}`}
					className="-ml-4"
				>
					<Image
						src={`/ebalniki/ebalo${i + 1}.png`}
						alt="card profile image"
						width={64}
						height={64}
					/>
				</div>
			)}
		</>
	)
}