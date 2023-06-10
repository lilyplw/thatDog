"use client";
import React, { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const SpanWord = ({ word, link }) => {
	const [isHovered, setIsHovered] = useState(false);

	const variants = {
		hover: (i) => ({
			y: -90,
			transition: { duration: 0.3, delay: i * 0.02 },
			type: "spring",
		}),
		exit: (i) => ({
			y: 0,
			transition: { duration: 0.3, delay: i * 0.02 },
			type: "spring",
		}),
	};

	return (
		<>
			<Word
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Link href={link}>
					{Array(2)
						.fill(word.split(""))
						.map((wordArr, rowIndex) => (
							<Row key={rowIndex} className={rowIndex === 0 ? "in" : "out"}>
								{wordArr.map((char, index) => (
									<motion.span
										key={index}
										custom={index}
										variants={variants}
										animate={isHovered ? "hover" : "exit"}
										style={{ display: "inline-block" }}
									>
										{char}
									</motion.span>
								))}
							</Row>
						))}
				</Link>
			</Word>
		</>
	);
};

const Word = styled.div`
	color: #fff;
	font-size: 3.8rem;
	font-weight: 700;
	margin: 20px 0;
	padding: 0;
	line-height: 1;
	overflow-y: hidden !important;
	height: 5rem !important;
	* {
		padding: 0;
		line-height: 1 !important;
		text-shadow: 1px 2px 10px #393939;
	}
	.in {
		margin: 0 0 30px 0;
	}
	.out {
		color: #34bfa6;
	}
`;

const Row = styled.div`
	display: block;
	min-width: 420px;
`;

export default SpanWord;
