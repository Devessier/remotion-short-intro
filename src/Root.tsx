import {Composition, staticFile} from 'remotion';
import {MyComposition, schema} from './Composition';
import {getVideoMetadata} from '@remotion/media-utils';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				schema={schema}
				defaultProps={{
					shortDurationInFrames: 0,
				}}
				calculateMetadata={async () => {
					const fps = 30;

					const shortData = await getVideoMetadata(staticFile('/short.mp4'));
					const shortDurationInFrames = secondsToFrames(
						shortData.durationInSeconds,
						fps
					);

					return {
						durationInFrames: shortDurationInFrames,
						fps,
						width: shortData.width,
						height: shortData.height,
						props: {
							shortDurationInFrames,
						},
					};
				}}
			/>
		</>
	);
};

function secondsToFrames(float: number, fps: number) {
	return Math.floor(float * fps);
}
