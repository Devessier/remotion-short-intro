import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {
	AbsoluteFill,
	Easing,
	Freeze,
	Img,
	OffthreadVideo,
	staticFile,
} from 'remotion';
import {z} from 'zod';
import {fadeScale} from './fade-scale-transition';

export const schema = z.object({
	shortDurationInFrames: z.number(),
});

export const MyComposition: React.FC<z.infer<typeof schema>> = ({
	shortDurationInFrames,
}) => {
	return (
		<AbsoluteFill className="bg-gray-950">
			<TransitionSeries>
				<TransitionSeries.Sequence durationInFrames={10}>
					<Img src={staticFile('/thumbnail.png')} />
				</TransitionSeries.Sequence>

				<TransitionSeries.Transition
					presentation={fadeScale({})}
					timing={linearTiming({
						durationInFrames: 10,
						easing: Easing.in(Easing.ease),
					})}
				/>

				<TransitionSeries.Sequence durationInFrames={10}>
					<Freeze frame={0}>
						<OffthreadVideo
							src={staticFile('/short starting immediately.mp4')}
						/>
					</Freeze>
				</TransitionSeries.Sequence>

				<TransitionSeries.Sequence durationInFrames={shortDurationInFrames}>
					<OffthreadVideo src={staticFile('/short starting immediately.mp4')} />
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</AbsoluteFill>
	);
};
