"use client";
import React, { useContext } from "react";
import { AppContext, AppProvider } from "@/contexts/AppContext";
// import Logo from "@/components/Home/Hero/Logo/LogoIndex";
import styled from "@emotion/styled";
// import { motion } from "framer-motion";
import useSmoothScroll from "@/hooks/useSmoothScroll";

function AboutContent() {
	const { width, height, isRendered, isFaded, imgWidth, imgHeight } =
		useContext(AppContext);

	let scaleFactor = (0.9 * width) / 1000;
	if (scaleFactor > 1) scaleFactor = 1;
	if (0.45 > scaleFactor) scaleFactor = 0.45;

	return (
		// <motion.div
		// 	initial={{ opacity: 0 }}
		// 	animate={{ opacity: 1 }}
		// 	transition={{ duration: 0.2 }}
		// >
		<AboutWrap>
			<AboutInner>
				{/* <LogoComponent width={width} height={height} scaleFactor={scaleFactor}>
					<Logo isFaded={isFaded} />
				</LogoComponent> */}
				<Tryangle scaleFactor={scaleFactor}></Tryangle>
			</AboutInner>
		</AboutWrap>
		// </motion.div>
	);
}

export default function About() {
	useSmoothScroll();

	return (
		<AppProvider>
			<AboutContent />
		</AppProvider>
	);
}

const AboutWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	overflow: hidden;
	position: relative;
`;

const AboutInner = styled.div``;

const Tryangle = styled.div`
	width: 600px;
	height: 600px;
	background-color: #34bfa6;
	position: absolute;
	top: 0;
	left: 0;
	clip-path: polygon(0 0, 98% 0, 57% 65%, 0 28%);
	transform: scale(${(props) => props.scaleFactor * 1.1}) !important;
	transform-origin: top left;
`;

const LogoComponent = styled.div`
	position: absolute;
	top: ${(props) => props.height * 0.05}px !important;
	left: ${(props) => props.width * 0.04}px !important;
	transform: scale(${(props) => props.scaleFactor}) !important;
	transform-origin: top left;
	z-index: 20 !important;
`;
