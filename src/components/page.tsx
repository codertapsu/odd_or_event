import Head from 'next/head';
import Appbar from './appbar';
import BottomNav from './bottom-nav';

const Page = ({ title, children }: Props) => (
	<>
		<Head>
			<title>{title ? `WebApp | ${title}` : 'WebApp'}</title>
		</Head>

		<Appbar />

		{/* <main>{children}</main> */}
		<main
			/**
			 * Padding top = `appbar` height
			 * Padding bottom = `bottom-nav` height
			 */
			className='mx-auto max-w-screen-md pt-20 pb-16 px-safe sm:pb-0'
		>
			<div className='p-6'>{children}</div>
		</main>

		<BottomNav />

		{/* <style jsx>{`
			main {
				margin: 0 auto;
				padding-top: calc(env(safe-area-inset-top) + 73px);
				padding-bottom: calc(env(safe-area-inset-bottom) + 73px);
				max-width: 40em;
				height: 100%;
				min-height: 100vh;
				background: var(--base);
				transition: var(--transition-colors);
			}
		`}</style> */}
	</>
);

export default Page;
