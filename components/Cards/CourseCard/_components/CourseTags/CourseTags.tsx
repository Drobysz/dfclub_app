import { ComplexTag } from "@/components/Tags/ComplexTag/ComplexTag"
import { CourseTagsProps } from "./CourseTags.props"
import { CourseTag } from "@/components/Tags/CourseTag/CourseTag"

export const CourseTags = ({
	category="Неизвестно",
	complexity="Неизвестно"
}: CourseTagsProps)=> {
	return (
		<div className="flex gap-2">
			<ComplexTag
				complexity={complexity}
			/>
			<CourseTag
				type="category"
			>
				{category}
			</CourseTag>
		</div>
	)
}