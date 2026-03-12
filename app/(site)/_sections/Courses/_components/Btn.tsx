import { ProjBtn } from "@/components"
import Link from "next/link"

export const Btn = ()=> {
	return (
		<Link
			href="/courses"
		>
			<ProjBtn
				colorSet="gr_lgt"
				size="large"
			>
				Изучить все курсы
			</ProjBtn>
		</Link>
	)
}