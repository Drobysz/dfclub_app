export const ShortDescription = ({ bgColor }: { bgColor: "green" | "dark" })=> {
	const styles = `text-gray-${bgColor == "green" ? '8' : '4'}00`;

	return (
		<p className={styles}>
			Курсы, практика и материалы в одном доступе
		</p>
	)
}