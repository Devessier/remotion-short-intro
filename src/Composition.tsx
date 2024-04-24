import {AbsoluteFill} from 'remotion';
import {z} from 'zod';

export const schema = z.object({});

export const MyComposition: React.FC<z.infer<typeof schema>> = () => {
	return <AbsoluteFill className="bg-gray-100" />;
};
