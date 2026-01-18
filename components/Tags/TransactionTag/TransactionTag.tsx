import Success from "@/assets/Success.svg";
import Processing from "@/assets/In procces.svg";
import Declined from "@/assets/Error.svg";

import cn from "classnames";

import { prime_regular } from "@/fonts/fonts";

export const TransactionTag = ({
	status
}: {
	status: "success" | "in_progress" | "declined"
})=> {
	const content = {
		"success":     {text: "Успешно", icon: <Success />, styles: "bg-green-light text-green-dark"},
		"in_progress": {text: "В обработке", icon: <Processing />, styles: "bg-banana-light text-[#C39710]"},
		"declined":    {text: "Отклонено", icon: <Declined />, styles: "bg-red-light text-accent"}
	}

	const chosen = content[status]

	return (
		<span className={cn(
			"flex p-2 rounded-lg gap-1",
			"items-center w-fit h-fit",
			prime_regular.className,
			chosen.styles
		)}>
			{chosen.icon}
			<span>{chosen.text}</span>
		</span>
	)
}