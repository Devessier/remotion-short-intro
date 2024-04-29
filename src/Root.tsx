import {Composition, staticFile} from 'remotion';
import {getVideoMetadata} from '@remotion/media-utils';
import {MyComposition, schema} from './Composition';
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

					const shortMetadata = await getVideoMetadata(
						staticFile('/short starting immediately.mp4')
					);
					const shortDurationInFrames = secondsToFrames(
						shortMetadata.durationInSeconds,
						fps
					);

					return {
						fps,
						width: shortMetadata.width,
						height: shortMetadata.height,
						durationInFrames: shortDurationInFrames + 10,
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
