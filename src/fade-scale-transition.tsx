import type {TransitionPresentation} from '@remotion/transitions';
import type {TransitionPresentationComponentProps} from '@remotion/transitions';
import {AbsoluteFill, interpolate} from 'remotion';

type FadeScaleTransitionProps = {};

export const fadeScale = (
	props: FadeScaleTransitionProps
): TransitionPresentation<FadeScaleTransitionProps> => {
	return {component: FadeScaleTransition, props};
};

const FadeScaleTransition: React.FC<
	TransitionPresentationComponentProps<FadeScaleTransitionProps>
> = ({children, presentationDirection, presentationProgress, passedProps}) => {
	const isEntering = presentationDirection === 'entering';

	if (isEntering === true) {
		return (
			<AbsoluteFill style={{opacity: presentationProgress}}>
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
	}

	return (
		<AbsoluteFill
			style={{opacity: interpolate(presentationProgress, [0, 0.8], [1, 0])}}
		>
			{children}
		</AbsoluteFill>
	);
};
