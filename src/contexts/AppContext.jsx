"use client";
import React, { createContext, useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

export const AppContext = createContext();

// AppProvider is a wrapper component that provides the app context
export function AppProvider({ children }) {
	const { width, height } = useWindowSize(); // get window size
	const [isRendered, setIsRendered] = useState(true); // render animation
	const [isFaded, setIsFaded] = useState(false); // fade animation

	// set imgWidth and imgHeight based on window size and aspect ratio of heroimage
	const imgHeight = 0.8 * height;
	const imgWidth = imgHeight / 1.43;

	return (
		<AppContext.Provider
			value={{
				width,
				height,
				isRendered,
				setIsRendered,
				isFaded,
				setIsFaded,
				imgWidth,
				imgHeight,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
