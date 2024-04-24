import {Composition} from 'remotion';
import {MyComposition, schema} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={schema}
				defaultProps={{}}
			/>
		</>
	);
};
