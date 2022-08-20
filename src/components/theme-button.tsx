import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();
	const [light, setLight] = useState<boolean>();

	useEffect(() => {
		setLight(theme === 'light');
	}, [theme]);

	const toggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button type='button' onClick={toggle}>
			{light ? 'Light' : 'Dark'} mode
			<style jsx>{`
				button {
					color: var(--label);
					font-size: 14px;
					background: transparent;
					display: flex;
					align-items: center;
					border: none;
					outline: none;
					cursor: pointer;
					transition: var(--transition-colors);
				}

				button:hover,
				button:focus {
					color: var(--fg);
				}
			`}</style>
		</button>
	);
};

export default ThemeButton;
