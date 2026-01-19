"use client"

import {
	ProjBtn, AccessTag, Arrow,
	ModalWindow, LikeTag, NoteTag,
	InfoBlock, CheckBox, CheckBox2,
	ActivityTag, CourseTag, ComplexTag,
	DurationTag, TransactionTag, ProfileIcon,
	Rating, SMbar, Comment, Loading, GleamingFrame,
	SubscribeCard
} from "@/components/index";
import sm from "../json/sm_list.json"
import { useState } from "react";

export default function Home() {
	const [rating, setRating] = useState(0);

	return (
		<main className="flex flex-col gap-6 p-10">
			<div>
				<ProjBtn colorSet="gr_trsp" size="large" icon="thunder" iconColor="green">
					Вступить в DF Club
				</ProjBtn>

				<ProjBtn colorSet="gr_dk" size="medium">
					Вступить в DF Club
				</ProjBtn>

				<ProjBtn colorSet="gr_lgt" size="small" icon="thunder" iconColor="white">
					Вступить в DF Club
				</ProjBtn>
			</div>

			<div>
				<AccessTag isAccessible/>
				<AccessTag isAccessible={false}/>
			</div>

			<div>
				<Arrow dir="l"/>
				<Arrow dir="r"/>
			</div>

			<div>
				<Arrow mode="dark" dir="l"/>
				<Arrow mode="dark" dir="r"/>
			</div>

			<div>
				<ModalWindow
					className="w-50 h-50 flex justify-center items-center"
					tag="section"
				>
					test
				</ModalWindow>
			</div>

			<div>
				<LikeTag />
				<NoteTag note={2.2}/>
			</div>

			<div>
				<InfoBlock
					title="Как начать обучение на платформе?"
					text="Чтобы начать, зарегистрируйтесь, выберите курс и оплатите доступ. После этого вы сразу сможете приступить к урокам."
				/>
			</div>

			<div className="flex gap-4">
				<CheckBox type="over-category"/>
				<CheckBox type="sub-category"/>
				<CheckBox2 />
			</div>

			<div className="flex gap-4">
				<ActivityTag isActive/>
				<ActivityTag />
				<DurationTag 
					totalTime={58}
					nbLessons={10}
				/>
				<CourseTag type="category">
					Психология
				</CourseTag>
				<ComplexTag complexity="Легкая"/>
				<CourseTag type="course_qntty">
					14 уроков
				</CourseTag>
				<CourseTag type="experience">
					10 лет опыта
				</CourseTag>
			</div>

			<div>
				<TransactionTag status="success"/>
				<TransactionTag status="in_progress"/>
				<TransactionTag status="declined"/>
			</div>

			<div>
				<ProfileIcon />
			</div>

			<div>
				<div className="flex gap-1"><Rating rating={3}/> <span> - fixed</span></div>
				<div className="flex gap-1">
					<Rating 
						isEditable
						rating={rating}
						setRating={setRating}
					/>
					<span> - editable</span>
				</div>
			</div>

			<div className="flex gap-2 items-start text-2xl">
				<SMbar SMList={sm}/>
				<span> - hover it!</span>
			</div>

			<div>
				<Comment
					name="Зубенко Михаил Петрович"
					date={100750000}
					course="Курсы мафиозника"
					comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula velit, venenatis non velit sit amet, laoreet bibendum justo. Donec semper urna sit amet malesuada vulputate. "
					note={4}
				/>
			</div>

			<div>
				<Loading />
			</div>

			<div className="bg-gray-700 p-4 flex flex-col items-center">
				<SubscribeCard  fit/>
				<div className="p-20 w-full">
					<SubscribeCard bgColor="green"/>
				</div>
			</div>

			<div className="h-30"/>
		</main>
	)
}