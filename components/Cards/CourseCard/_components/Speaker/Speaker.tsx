import { ProfileIcon } from "@/components/ProfileIcon/ProfileIcon";
import { Title } from "./_components/Title/Title";
import { SpeakerProfile } from "@/interface";

export const Speaker = ({
	name,
	occupation,
	avatar
}: SpeakerProfile)=> {
	return (
		<div
			className="flex items-center gap-2"
		>
			<ProfileIcon
				src={avatar}
			/>
			<Title
				name={name}
				occupation={occupation}
			/>
		</div>
	)
}