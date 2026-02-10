import Image from "next/image";
import styles from "./illustration.module.scss";
import { Title } from "./_components/Title"; 

export const Illustration = ()=> {
	return (
		<div className="flex justify-center px-8 pb-8">
			<section
				className={styles.sect}
			>
				<Title />
				<Image
					src="/illustration.png"
					alt="rizhuha"
					className="self-end"
					width={480}
					height={650}
				/>
			</section>	
		</div>	
	)
}