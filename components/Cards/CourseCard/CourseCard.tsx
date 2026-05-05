import { CourseCardProps } from "./CourseCard.props";
import {
	Body,
	Cover,
	Speaker,
	CourseTags,
	Title,
	Time,
	ProgressBtn
} from "./_components";

export const CourseCard = ({
	category,
	title,
	complexity,
	liked,
	rating,
	total_time,
	time_completed = 0,
	cardType = "none",
	nbCourses,
	img,
	speaker
}: CourseCardProps)=> {
	const courseProgress = Math.round((time_completed / total_time) * 100);

	return (
		<Body cardType={cardType}>
			<Cover
				rating={rating}
				isLiked={liked}
				cardType={cardType}
				img={img}
			/>
			<div className="flex flex-col gap-3 p-4">
				<Speaker
					name={speaker.name}
					occupation={speaker.occupation}
					avatar={speaker.avatar}
				/>
				{cardType == "none" &&
					<CourseTags
						complexity={complexity}
						category={category}
					/>
				}
				<Title
					title={title}
				/>
				<Time
					nbCourses={nbCourses}
					progress={time_completed}
					cardType={cardType}
					total_time={total_time}
				/>
				{cardType != "none" &&
					<ProgressBtn
						progress={courseProgress}
						cardType={cardType}
					/>
				}
			</div>
		</Body>
	)
}