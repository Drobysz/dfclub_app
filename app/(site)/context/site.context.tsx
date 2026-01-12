import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface SiteContextInterface {
	isModalWindowOpen: boolean;

	setModalWindow: Dispatch<SetStateAction<boolean>>;
}

export const SiteContext = createContext<SiteContextInterface>({
	isModalWindowOpen: false,

	setModalWindow: ()=> {}
})

export const SiteContextProvider = ({children}: {children: ReactNode})=> {
	const [isModalWindowOpen, setModalWindow] = useState(false);

	return (
		<SiteContext.Provider
			value={{
				isModalWindowOpen: isModalWindowOpen,

				setModalWindow
			}}
		>
			{children}
		</SiteContext.Provider>
	)
}