"use client";
import { useState, useEffect } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { motion, useAnimation } from "framer-motion";
import InformationTitle from "./Title";
import Card from "./Card";
import styled from "@emotion/styled";

const Information = () => {
	const informationList = [
		{
			key: 1,
			date: "2021/10/10",
			title: "1information Title",
			link: "https://www.google.com/",
			category: "category",
			image: "https://dummyimage.com/700x400",
			body: "aaaaaaaaaaaaaaaaaaaaa",
		},
		{
			key: 2,
			date: "2021/10/11",
			title: "2information Title",
			link: "https://www.google.com/",
			category: "category",
			image: "https://dummyimage.com/700x400",
			body: "aaaaaaaaaaaaaaaaaaaaa",
		},
		{
			key: 3,
			date: "2021/10/12",
			title: "3information Title",
			link: "https://www.google.com/",
			category: "category",
			image: "https://dummyimage.com/700x400",
			body: "aaaaaaaaaaaaaaaaaaaaa",
		},
	];

	const { isVisible, domRef } = useIntersectionObserver();
	const [isAnimating, setIsAnimating] = useState(false);

	// isVisibleが変わるたびにisAnimatingを更新する
	useEffect(() => {
		if (isVisible) {
			setIsAnimating(true);
		} else {
			// delayを加えて、アニメーションが完全に終わった後で非表示にする
			setTimeout(() => {
				setIsAnimating(false);
			}, 1000); // この時間はli要素の数とdelayによって調整する必要があります
		}
	}, [isVisible]);

	return (
		<div className="relative">
			<GradientBG>
				<div className="container px-5 py-28 mx-auto ">
					<InformationTitle />
					<section className="text-gray-600 body-font ">
						<motion.div
							className="flex flex-wrap -m-4"
							ref={domRef}
							initial="hidden"
							animate={isVisible ? "visible" : "hidden"}
						>
							{informationList.map((information, i, isVisible) => (
								<Card
									key={i}
									value={i}
									date={information.date}
									title={information.title}
									link={information.link}
									category={information.category}
									image={information.image}
									body={information.body}
									isVisible={isVisible}
								/>
							))}
						</motion.div>
					</section>
				</div>
			</GradientBG>
			<div className="content-none absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent"></div>
		</div>
	);
};

export default Information;

const GradientBG = styled.div`
	background: linear-gradient(-45deg, #13547a, #80d0c7);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100%;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;
