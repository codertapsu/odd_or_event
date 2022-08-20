// import type { AppProps } from 'next/app';
// import Meta from '@/components/meta';
// import '@/styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
// 	return (
// 		<>
// 			<Meta />
// 			<Component {...pageProps} />
// 		</>
// 	);
// }

// export default MyApp;

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Meta from '@/components/meta';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='dark'
			disableTransitionOnChange
		>
			<Meta />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
