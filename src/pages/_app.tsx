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
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Web3ContextProvider } from '@/context/Web3Context';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='dark'
			disableTransitionOnChange
		>
			<Web3ContextProvider>
				<>
					<Meta />
					<Component {...pageProps} />
					<ToastContainer
						hideProgressBar
						position='bottom-right'
						autoClose={2000}
					/>
				</>
			</Web3ContextProvider>
		</ThemeProvider>
	);
};

export default App;
