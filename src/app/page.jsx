"use client";
import React from "react";
import { AppProvider, useEffect } from "@/contexts/AppContext";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Hero from "@/components/Home/Hero/HeroIndex";
import Information from "@/components/Home/Information/InformationIndex";

export default function Home() {
	useSmoothScroll();
	return (
		<AppProvider>
			<Hero />
			<Information />
		</AppProvider>
	);
}
