// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import UnnecessarilyComplexTitle from './unnecessarily-complex-title';
// import Avatar from './avatar';
// import ThemeButton from './theme-button';

// const Header = () => {
// 	const [loaded, setLoaded] = useState(false);

// 	useEffect(() => {
// 		setLoaded(true);
// 	}, []);

// 	return (
// 		<header>
// 			<UnnecessarilyComplexTitle loaded={loaded} />

// 			<div style={{ flex: 1 }} />

// 			<nav>
// 				<ThemeButton />

// 				<div className='divider' />

// 				<Link href='/profile'>
// 					<a title='Profile' aria-label='Profile'>
// 						<Avatar image='/images/avatar.jpg' />
// 					</a>
// 				</Link>
// 			</nav>

// 			<style jsx>{`
// 				header {
// 					padding: 0 var(--gap);
// 					padding-top: env(safe-area-inset-top);
// 					width: 100%;
// 					height: calc(env(safe-area-inset-top) + 72px);
// 					background: var(--base);
// 					border-bottom: 1px solid var(--divider);
// 					display: flex;
// 					align-items: center;
// 					z-index: 10;
// 					position: fixed;
// 					top: 0;
// 					left: 0;
// 					transition: var(--transition-colors);
// 				}

// 				nav {
// 					display: flex;
// 					align-items: center;
// 					z-index: 4;
// 				}

// 				.divider {
// 					margin: 0 var(--gap);
// 					width: 1px;
// 					height: 28px;
// 					background: var(--divider);
// 					display: flex;
// 					transition: var(--transition-colors);
// 				}
// 			`}</style>
// 		</header>
// 	);
// };

// export default Header;

import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeButton from './theme-button';

const links = [
	{ label: 'Story', href: '/story' },
	{ label: 'Recipes', href: '/recipes' },
];

const Appbar = () => {
	const router = useRouter();

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-6'>
					<div className='flex items-center justify-between'>
						<Link href='/'>
							<a>
								<h1 className='font-medium'>Rice Bowl</h1>
							</a>
						</Link>
						<div className='ml-4'>
							<ThemeButton />
						</div>
					</div>

					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${
												router.pathname === href
													? 'text-indigo-500 dark:text-indigo-400'
													: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
											}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>

						<div
							title='Gluten Free'
							className='h-10 w-10 rounded-full bg-zinc-200 bg-cover bg-center shadow-inner dark:bg-zinc-800'
							style={{
								backgroundImage:
									'url(https://images.unsplash.com/photo-1612480797665-c96d261eae09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)',
							}}
						/>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Appbar;
