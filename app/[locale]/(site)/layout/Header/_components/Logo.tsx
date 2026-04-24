import Image from "next/image"
import Link from "next/link"

export const Logo = ()=> {
	return (
		<Link
			href="/"
			className="cursor-pointer"
		>
			<Image
				src="/logo_menu.png"
				alt="menu logo"
				width={129}
				height={37}
			/>
		</Link>
	)
}