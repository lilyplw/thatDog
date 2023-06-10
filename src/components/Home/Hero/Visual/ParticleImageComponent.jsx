"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ParticleImage, { Vector, forces } from "react-particle-image";

const particleOptions = {
	filter: ({ x, y, image }) => {
		const pixel = image.get(x, y);
		return pixel.b > 50;
	},
	color: () => "#34BFA6",
	radius: () => Math.random() * 1.5 + 0.5,
	mass: () => 60,
	friction: () => 0.23,
	initialVelocity: () =>
		new Vector((Math.random() - 0.5) * 1000, (Math.random() - 1) * 1000),
};

const motionForce = (x, y) => {
	return forces.disturbance(x, y, 5);
};

export const ParticleImageComponent = ({ width, height, isFaded }) => {
	const imgHeight = 0.8 * height; // 80vh
	const imgWidth = imgHeight / 1.43; // keeping aspect ratio 1:1.43
	let scaleFactor = (0.9 * height) / 1000; // avatar size

	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: isFaded ? 0 : 1 }}
			transition={{ duration: 1 }}
			exit={{ opacity: 0 }}
		>
			<ParticleImageContainer>
				<ParticleImage
					src={"/that_dog.png"}
					width={width}
					height={height}
					scale={scaleFactor}
					entropy={20}
					maxParticles={6000}
					particleOptions={particleOptions}
					mouseMoveForce={motionForce}
					touchMoveForce={motionForce}
					backgroundColor="#191D1F"
				/>
			</ParticleImageContainer>
		</motion.div>
	);
};

const ParticleImageContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
