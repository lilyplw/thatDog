import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const useAnimationController = (isVisible) => {
	const controls = useAnimation();

	// 背景色の動きをつけるための設定
	const animationSettings = {
		x: "101%",
		transition: {
			duration: 0.6,
			ease: [1, 0.9, 0.1, 1],
		},
	};

	// isVisibleがtrueの時のアニメーション
	const animationVisible = {
		...animationSettings,
		transition: {
			...animationSettings.transition,
			type: "spring",
			stiffness: 50,
			delay: 0.2,
			velocity: 30,
		},
	};

	// isVisibleがfalseの時のアニメーション
	const animationHidden = {
		...animationSettings,
		x: "-101%",
	};

	useEffect(() => {
		if (isVisible) {
			controls.start(animationVisible);
		} else {
			controls.set(animationHidden); // アニメーションをスキップし、すぐに初期状態に戻す
		}
	}, [controls, isVisible]);

	// 背景色の動きをつけるための設定ここまで

	return { controls };
};

export default useAnimationController;
