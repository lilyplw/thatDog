import { useState, useEffect, useRef } from "react";

const UseIntersectionObserver = () => {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setIsVisible(entry.isIntersecting));
		});

		const ref = domRef.current;
		if (ref) {
			observer.observe(ref);
		}

		return () => {
			if (ref) {
				observer.unobserve(ref);
			}
		};
	}, []);

	return { isVisible, domRef };
};

export default UseIntersectionObserver;
