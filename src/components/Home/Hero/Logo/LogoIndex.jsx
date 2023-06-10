import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Logo = ({ isFaded }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: isFaded ? 1 : 0,
				transition: { delay: isFaded ? 0 : 2 },
			}}
			transition={{ duration: 1 }}
		>
			<LogoText>
				<img src="/logo.png" alt="Dog logo" width="100px" height="100px" />
				<h1>
					<span>Dog</span>
					<span>Corporation</span>
				</h1>
			</LogoText>
		</motion.div>
	);
};

const LogoText = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	z-index: 20;

	img {
		width: 5rem;
		height: auto;
		object-fit: contain;
	}

	h1 {
		color: white;
		font-size: 3.125rem;
		margin-top: 0;
		margin-left: 1rem;
		padding-top: 0;
		line-height: 1 !important;

		span {
			display: block;
			margin-top: 0;
			padding-top: 0;
			line-height: 1 !important;
		}
	}
`;

export default Logo;
