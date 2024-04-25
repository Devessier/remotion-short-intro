import type {TransitionPresentation} from '@remotion/transitions';
import type {TransitionPresentationComponentProps} from '@remotion/transitions';
import {AbsoluteFill} from 'remotion';

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
				<AbsoluteFill>{children}</AbsoluteFill>
			</AbsoluteFill>
		);
	}

	return (
		<AbsoluteFill>
			<AbsoluteFill>{children}</AbsoluteFill>
		</AbsoluteFill>
	);
};
