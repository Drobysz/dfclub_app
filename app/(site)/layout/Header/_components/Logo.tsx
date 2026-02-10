import Image from "next/image"

export const Logo = ()=> {
	return (
		<Image
			src="/logo_menu.png"
			alt="menu logo"
			width={129}
			height={37}
		/>
	)
}