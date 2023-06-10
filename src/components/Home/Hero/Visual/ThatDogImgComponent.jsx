"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ThatDogImgComponent = ({ imgWidth, imgHeight }) => (
	<ThatDogImg>
		<motion.img
			className="ThatDog-img"
			src={"/that_dog.png"}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			width={imgWidth}
			height={imgHeight}
		/>
	</ThatDogImg>
);

const ThatDogImg = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100vh;
	overflow: hidden;
	z-index: 10 !important;

	.ThatDog-img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10 !important;
	}
`;
