import { CourseCard } from "@/components"

export const CourseCards = ()=> {
	return (
		<div
			className="grid grid-cols-3 gap-8"
		>
			{Array(6).fill(true).map((_, i)=>
				<CourseCard
					key={`main_page_course_card-${i}`}
					title="Как масштабировать команду и прибыль без выгорания"
					complexity="Легкая"
					cardType="none"
					category="Психология"
					speaker={{
						name: "Анна Коваленко",
						occupation: "Директор в IT-компании"
					}}
					nbCourses={5}
					total_time={205}
					rating={4.7}
					liked={false}
				/>
			)}
		</div>
	)
}