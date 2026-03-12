import Book from "@/assets/book.svg";
import Bonnet from "@/assets/ learn.svg";
import { motion } from "framer-motion";

export const Tag = ({
	hover,
	icon
}: {
	hover: boolean,
	icon: "book" | "bonnet"
})=> {
	return (
		<motion.span
			className="text-white bg-primary-500 p-3 rounded-2xl w-fit h-fit"
			animate={{
				y: hover ? -10 : 0
			}}
		>
			{icon === "book" && <Book />}
			{icon === "bonnet" && <Bonnet />}
		</motion.span>
	)
}