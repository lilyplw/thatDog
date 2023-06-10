"use client";
import styled from "@emotion/styled";
import { VFXProvider, VFXVideo } from "react-vfx";

export const VFXVideoComponent = () => (
	<VFXProvider>
		<VideoWrap>
			<VFXVideo
				className="video"
				shader="glitch"
				autoPlay
				loop
				muted
				playsInline
				src="/herovideo.mp4"
			/>
		</VideoWrap>
	</VFXProvider>
);

const VideoWrap = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
	min-height: 100dvh;
	height: auto;
	overflow: hidden !important;
	z-index: 8;
	.video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 100%;
		min-height: 100vh;
		min-height: 100dvh;
		max-height: 100vh;
		max-height: 100dvh;
		overflow: hidden !important;
		width: auto;
		height: auto;
	}
	&::after {
		content: "";
		display: inline-block;
		width: 100%;
		min-height: 100vh;
		min-height: 100dvh;
		height: fit-content !important;
		background: rgba(0, 0, 0, 0.8);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9;
	}
`;
