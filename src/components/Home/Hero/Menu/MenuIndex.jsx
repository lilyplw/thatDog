"use client";
import SpanWord from "./SpanWord";
import { motion } from "framer-motion";

const TextEffect = ({ isFaded }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: isFaded ? 1 : 0,
				transition: { delay: isFaded ? 0 : 2 },
			}}
			transition={{ duration: 1 }}
		>
			<SpanWord word="Information" link={"information"} />
			<SpanWord word="About" link={"about"} />
			<SpanWord word="Service" link={"service"} />
			<SpanWord word="Gallery" link={"gallery"} />
			<SpanWord word="Organigram" link={"organigram"} />
		</motion.div>
	);
};

export default TextEffect;
