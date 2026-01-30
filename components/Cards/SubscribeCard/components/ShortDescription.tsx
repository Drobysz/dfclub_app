export const ShortDescription = ({ bgColor }: { bgColor: "green" | "dark" })=> {
	const styles = bgColor == "green"
		? "text-gray-800"
		: "text-gray-400";

	return (
		<p className={styles}>
			Курсы, практика и материалы в одном доступе
		</p>
	)
}