import { prime_regular, prime_semibold } from "@/fonts/fonts";
import cn from "classnames";

export const Title = ()=> {
	return (
		<header className="flex justify-between items-center">
			<h2
				className={cn(
					prime_semibold.className,
					"text-gray-900 text-[2.5rem]",
					"flex flex-col leading-11"
				)}
			>
				<span className="text-primary-500">Достигай большего</span> 
				<span>с правильными</span>
				<span>знаниями и поддержкой</span>
			</h2>
			<p
				className={cn(
					prime_regular.className,
					"text-gray-800 w-116.25"
				)}
			>
				Мы создаём среду, где каждый может учиться, развиваться и зарабатывать. У нас нет барьеров, только возможности и поддержка комьюнити
			</p>
		</header>
	)
}