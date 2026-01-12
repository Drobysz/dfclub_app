"use client";

import { createContext, ReactNode } from "react";

interface GlobalContextInterface {
	test: number
}

export const GlobalContext = createContext<GlobalContextInterface>({
	test: 0
})

export const GlobalContextProvider = ({
	children
}: {
	children: ReactNode
})=> {
	return (
		<GlobalContext.Provider
			value={{
				test: 0
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}