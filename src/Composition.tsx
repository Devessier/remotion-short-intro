import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {AbsoluteFill, Img, OffthreadVideo, staticFile} from 'remotion';
import {z} from 'zod';
import {fadeScale} from './fade-scale-transition';

export const schema = z.object({});

export const MyComposition: React.FC<z.infer<typeof schema>> = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={10}>
				<Img src={staticFile('/thumbnail.png')} />
			</TransitionSeries.Sequence>

			<TransitionSeries.Transition
				presentation={fadeScale({})}
				timing={linearTiming({
					durationInFrames: 10,
				})}
			/>

			<TransitionSeries.Sequence durationInFrames={120}>
				<OffthreadVideo src={staticFile('/short.mp4')} />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
