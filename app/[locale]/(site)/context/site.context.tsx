import { ReactNode, createContext, useState } from "react";
import { SiteContextInterface } from "./site.interface";
import { UserSession } from "@/interface";

const testUser: UserSession = 
{
	name: "Victor",
	email: "victor26@gmail.com",
	balance: 12,
	pswd: "lol1",
	language: 'en'
}

export const SiteContext = createContext<SiteContextInterface>({
	isModalWindowOpen: false,
	session: testUser,

	setModalWindow: ()=> {},
	setSession: ()=> {}
})

export const SiteContextProvider = ({children}: {children: ReactNode})=> {
	const [isModalWindowOpen, setModalWindow] = useState(false);
	const [session, setSession] = useState<UserSession>(testUser);

	return (
		<SiteContext.Provider
			value={{
				isModalWindowOpen: isModalWindowOpen,
				session: session,

				setModalWindow,
				setSession
				
			}}
		>
			{children}
		</SiteContext.Provider>
	)
}