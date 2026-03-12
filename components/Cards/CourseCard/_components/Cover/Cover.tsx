import { NoteTag } from "@/components/Tags/NoteTag/NoteTag";
import { CoverProps } from "./Cover.props";
import styles from "./cover.module.scss";
import { LikeTag } from "@/components/Tags/LikeTag/LikeTag";
import cn from "classnames";

export const Cover = ({
	isLiked,
	rating,
	cardType,
	img
}: CoverProps)=> {
	const cover = img != undefined
		? img
		: "/unknown_cover.svg"

	return (
		<div
			className={cn(
				styles.body, {
					["h-60"]: cardType == "none",
					["h-50"]: cardType != "none"
				}
			)}
			style={{
				backgroundImage: `url(${cover})`,
				backgroundSize: "contain",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundColor: "#F1F3F4"
			}}
        >
			<div className={styles.tags}>
				<NoteTag
					note={rating}
				/>
				<LikeTag
					isLiked={isLiked}
				/>
			</div>
		</div>
	)
}