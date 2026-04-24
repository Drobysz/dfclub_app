import { Comment } from "@/components"
import { DetailedHTMLProps, HTMLAttributes } from "react"

type TC = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const TestComment = ({...props}: TC)=> {
	return (
		<Comment
			{...props}
			name="Зубенко Михаил Петрович"
			date={100750000}
			course="Курсы мафиозника"
			comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula velit, venenatis non velit sit amet, laoreet bibendum justo. Donec semper urna sit amet malesuada vulputate. "
			note={4}
		/>
	)
}