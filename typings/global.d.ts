declare interface Props {
	size?: number;
	image?: string;
	children?: React.ReactNode;
	title?: string;
	loaded?: boolean;
}

interface Window {
	isLight: boolean;
}
