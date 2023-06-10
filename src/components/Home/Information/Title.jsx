import React from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useAnimationControllerTextSlide from "@/hooks/useAnimationController-TextSlide";
import { motion } from "framer-motion";

const InformationTitle = () => {
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
	const { controls } = useAnimationControllerTextSlide(isVisible);

	// 文字の動きをつけるための設定
	const variantsTitle = {
		visible: () => ({
			opacity: 1,
			transition: {
				delay: 0.4,
				duration: 0.1,
			},
		}),
		hidden: { opacity: 0 },
	};
	const variantsText = {
		visible: () => ({
			opacity: 1,
			transition: {
				delay: 0.6,
				duration: 0.2,
			},
		}),
		hidden: { opacity: 0 },
	};
	// 文字の動きをつけるための設定ここまで

	return (
		<motion.div
			className="flex flex-col text-center w-full mb-20 pt-28"
			ref={domRef}
			initial="hidden"
			animate={isVisible ? "visible" : "hidden"}
		>
			<div className="px-4 pt-8 pb-4 mx-auto max-w-7xl  overflow-x-hidden">
				<div className="relative flex flex-col text-center mx-auto w-fit overflow-x-hidden">
					<motion.h2
						className="max-w-5xl px-10 text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl !z-20"
						variants={variantsTitle}
						style={{ color: "#ffffff" }}
					>
						Information
					</motion.h2>
					<motion.div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							backgroundColor: "#ffffff",
							width: "100%",
							height: "100%",
						}}
						initial={{ x: "-101%" }}
						animate={controls}
						className="!z-[21]"
					/>
				</div>
			</div>
			<motion.p
				className="lg:w-2/3 mx-auto leading-relaxed text-base !z-20 text-white"
				variants={variantsText}
			>
				this is information
			</motion.p>
		</motion.div>
	);
};

export default InformationTitle;
