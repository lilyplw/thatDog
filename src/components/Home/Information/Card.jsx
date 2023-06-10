import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

function Card(props) {
	const variants = {
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: props.isVisible ? (i + 2) * 0.2 : 0,
			},
		}),
		hidden: { opacity: 0, y: 100 },
	};

	return (
		<motion.div
			className="p-4 md:w-1/3 !z-20"
			custom={props.value}
			variants={variants}
			key={props.value}
		>
			<GlassBG className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
				<img
					className="lg:h-48 md:h-36 w-full object-cover object-center"
					src="https://dummyimage.com/720x400"
					alt="blog"
				/>
				<div className="p-6">
					<h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
						{props.category}
					</h2>
					<h1 className="title-font text-lg font-medium text-white mb-3">
						{props.title}
					</h1>
					<p className="leading-relaxed mb-3 text-white">{props.title}</p>
					<div className="flex items-center flex-wrap justify-end">
						<a
							className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
							src={props.link}
						>
							Learn More
							<svg
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</GlassBG>
		</motion.div>
	);
}

export default Card;

const GlassBG = styled.div`
	background: rgba(255, 255, 255, 0.375);
	box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
	border-radius: 2rem;
	border: 1px solid rgba(255, 255, 255, 0.125);
`;
