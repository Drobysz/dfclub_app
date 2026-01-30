"use client"

import { GleamingFrame } from "@/components/index";
import { 
	SubscribeBtn,
	SubscribeTag,
	Price,
	SubServices,
	ShortDescription,
	SubscribeBody
} from "./components/index";

export const SubscribeCard = ({
	bgColor = "dark",
	fit = false
}: {
	bgColor?: "green" | "dark",
	fit?: boolean
})=> {
	const Wrapper = bgColor == "dark" ? GleamingFrame : "div";

	return (
		<Wrapper className={`rounded-3xl ${fit ? "w-99.25" : "w-full"}`}>
			<SubscribeBody bgColor={bgColor}>
				<div className="flex flex-col gap-8">
					<SubscribeTag bgColor={bgColor}/>
					<Price bgColor={bgColor}/>
				</div>
				<ShortDescription bgColor={bgColor}/>
				<SubscribeBtn />
				<SubServices bgColor={bgColor}/>
			</SubscribeBody>
		</Wrapper>
	)
}