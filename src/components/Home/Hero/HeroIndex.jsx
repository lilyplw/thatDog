"use client";
import { useContext, useEffect } from "react";
import { AppContext } from "@/contexts/AppContext";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";
import { ParticleImageComponent } from "./Visual/ParticleImageComponent";
import { ThatDogImgComponent } from "./Visual/ThatDogImgComponent";
import { VFXVideoComponent } from "./Visual/VFXVideoComponent";

import Menu from "./Menu/MenuIndex";
import Logo from "./Logo/LogoIndex";

export default function Hero() {
	const {
		width,
		height,
		isRendered,
		setIsRendered,
		isFaded,
		setIsFaded,
		imgWidth,
		imgHeight,
	} = useContext(AppContext);

	// set isRendered to false after 3 seconds
	useEffect(() => {
		const timeoutId = setTimeout(() => setIsRendered(false), 3000);
		return () => clearTimeout(timeoutId);
	}, []);

	// set isFaded to true after 1 second
	useEffect(() => {
		if (!isRendered) {
			const timeoutId = setTimeout(() => setIsFaded(true), 1000);
			return () => clearTimeout(timeoutId);
		}
	}, [isRendered]);

	let scaleFactor = (0.9 * width) / 1000; // scale factor for menu and logo
	if (scaleFactor > 1) scaleFactor = 1; // max scale factor is 1
	if (0.45 > scaleFactor) scaleFactor = 0.45; // min scale factor is 0.45

	return (
		<HeroWrap>
			<AnimatePresence>
				{/* // isRendered is true for 3 seconds, then it's false */}
				{isRendered ? (
					<ParticleImageComponent
						width={width}
						height={height}
						isFaded={isFaded}
					/>
				) : (
					<>
						<VFXVideoComponent />
						<ThatDogImgComponent imgWidth={imgWidth} imgHeight={imgHeight} />
					</>
				)}
			</AnimatePresence>

			{/* // Menu and Logo are rendered conditionally */}
			{!isRendered && (
				<MenuComponent width={width} height={height} scaleFactor={scaleFactor}>
					<Menu isFaded={isFaded} />
				</MenuComponent>
			)}
			{!isRendered && (
				<LogoComponent width={width} height={height} scaleFactor={scaleFactor}>
					<Logo isFaded={isFaded} />
				</LogoComponent>
			)}

			{/* // This div is used to create a gradient overlay on the bottom half of the hero image */}
			<div className="content-none absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black !z-19"></div>
		</HeroWrap>
	);
}

const HeroWrap = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;

const MenuComponent = styled.div`
	position: absolute;
	bottom: ${({ height }) => height * 0.05}px !important;
	right: ${({ width }) => width * 0.04}px !important;
	transform: scale(${({ scaleFactor }) => scaleFactor}) !important;
	transform-origin: bottom right;
	z-index: 20 !important;
`;

const LogoComponent = styled.div`
	position: absolute;
	top: ${({ height }) => height * 0.05}px !important;
	left: ${({ width }) => width * 0.04}px !important;
	transform: scale(${({ scaleFactor }) => scaleFactor}) !important;
	transform-origin: top left;
	z-index: 20 !important;
`;
