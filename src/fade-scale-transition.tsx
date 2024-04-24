import {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '@remotion/transitions';
import {AbsoluteFill, interpolate} from 'remotion';

export type FadeScaleProps = {};

const FadeScalePresentation: React.FC<
	TransitionPresentationComponentProps<FadeScaleProps>
> = ({children, presentationDirection, presentationProgress}) => {
	const isEntering = presentationDirection === 'entering';

	if (isEntering === false) {
		return (
			<AbsoluteFill
				style={{
					opacity: interpolate(presentationProgress, [0, 0.8], [1, 0], {
						extrapolateRight: 'clamp',
					}),
					transform: `scale(${interpolate(
						presentationProgress,
						[0, 0.8],
						[1, 1.4],
						{extrapolateRight: 'clamp'}
					)})`,
				}}
			>
				{children}
			</AbsoluteFill>
		);
	}

	return (
		<AbsoluteFill
			style={{
				opacity: presentationProgress,
			}}
		>
			<AbsoluteFill className="bg-gray-950" />

			<AbsoluteFill
				style={{
					transform: `scale(${interpolate(
						presentationProgress,
						[0, 1],
						[0.8, 1]
					)})`,
				}}
			>
				{children}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const fadeScale = (
	props?: FadeScaleProps
): TransitionPresentation<FadeScaleProps> => {
	return {
		component: FadeScalePresentation,
		props: props ?? {},
	};
};
