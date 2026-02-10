import {
	UpperPart,
	LowerPart,
	FooterBody
} from "./components/index";

export const Footer = ({
	className
}: {
	className?: string
})=> {
	return (
		<FooterBody className={className}>
			<UpperPart />
			<LowerPart />
		</FooterBody>
	)
}