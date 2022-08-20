import Head from 'next/head';

const Meta = () => (
	<Head>
		{/* Must  */}
		<meta charSet='utf-8' />
		<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
		<meta
			name='viewport'
			content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
		/>
		<meta name='description' content='Description' />
		<meta name='keywords' content='Keywords' />
		<title>Page Title</title>

		{/* Android   */}
		<meta
			name='theme-color'
			content='#f4f4f5'
			media='(prefers-color-scheme: light)'
		/>
		<meta
			name='theme-color'
			content='#18181b'
			media='(prefers-color-scheme: dark)'
		/>
		<meta name='mobile-web-app-capable' content='yes' />

		{/* iOS  */}
		<meta name='apple-mobile-web-app-title' content='Application Title' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta
			name='apple-mobile-web-app-status-bar-style'
			content='black-translucent'
		/>

		{/* Windows   */}
		<meta name='msapplication-navbutton-color' content='red' />
		<meta name='msapplication-TileColor' content='red' />
		<meta
			name='msapplication-TileImage'
			content='/images/icons-branding/ms-icon-144x144.png'
		/>
		<meta name='msapplication-config' content='browserconfig.xml' />

		{/* Pinned Sites   */}
		<meta name='application-name' content='Application Name' />
		<meta name='msapplication-tooltip' content='Tooltip Text' />
		<meta name='msapplication-starturl' content='/' />

		{/* Tap highlighting   */}
		<meta name='msapplication-tap-highlight' content='no' />

		{/* UC Mobile Browser   */}
		<meta name='full-screen' content='yes' />
		<meta name='browsermode' content='application' />

		{/* Disable night mode for this page   */}
		<meta name='nightmode' content='enable/disable' />

		{/* Fitscreen   */}
		{/* <meta name='viewport' content='uc-fitscreen=yes' /> */}

		{/* Layout mode  */}
		<meta name='layoutmode' content='fitscreen/standard' />

		{/* imagemode - show image even in text only mode   */}
		<meta name='imagemode' content='force' />

		{/* Orientation   */}
		<meta name='screen-orientation' content='portrait'></meta>

		{/* Main Link Tags   */}
		<link
			href='/images/icons-branding/favicon-16.png'
			rel='icon'
			type='image/png'
			sizes='16x16'
		/>
		<link
			href='/images/icons-branding/favicon-32.png'
			rel='icon'
			type='image/png'
			sizes='32x32'
		/>
		<link
			href='/images/icons-branding/favicon-48.png'
			rel='icon'
			type='image/png'
			sizes='48x48'
		/>

		{/* iOS   */}
		<link
			rel='apple-touch-icon'
			sizes='57x57'
			href='/images/icons-branding/apple-icon-57.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='60x60'
			href='/images/icons-branding/apple-icon-60.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='72x72'
			href='/images/icons-branding/apple-icon-72.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='76x76'
			href='/images/icons-branding/apple-icon-76.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='114x114'
			href='/images/icons-branding/apple-icon-114.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='120x120'
			href='/images/icons-branding/apple-icon-120.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='144x144'
			href='/images/icons-branding/apple-icon-144.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='152x152'
			href='/images/icons-branding/apple-icon-152.png'
		/>
		<link
			rel='apple-touch-icon'
			sizes='180x180'
			href='/images/icons-branding/apple-icon-180.png'
		/>

		{/* Startup Image   */}
		<link
			href='/images/icons-branding/apple-icon-180.png'
			rel='apple-touch-startup-image'
		/>

		{/* <link href="/apple_splash_2048.png" sizes="2048x2732" rel="apple-touch-startup-image" />
<link href="/apple_splash_1668.png" sizes="1668x2224" rel="apple-touch-startup-image" />
<link href="/apple_splash_1536.png" sizes="1536x2048" rel="apple-touch-startup-image" />
<link href="/apple_splash_1125.png" sizes="1125x2436" rel="apple-touch-startup-image" />
<link href="/apple_splash_1242.png" sizes="1242x2208" rel="apple-touch-startup-image" />
<link href="/apple_splash_750.png" sizes="750x1334" rel="apple-touch-startup-image" />
<link href="/apple_splash_640.png" sizes="640x1136" rel="apple-touch-startup-image" /> */}

		{/* Pinned Tab   */}
		<link
			href='/images/icons-branding/apple-icon-120.png'
			rel='mask-icon'
			sizes='any'
			color='red'
		/>

		{/* Android   */}
		<link
			href='/images/icons-branding/icon-192.png'
			rel='icon'
			sizes='192x192'
		/>
		<link
			href='/images/icons-branding/icon-128.png'
			rel='icon'
			sizes='128x128'
		/>

		{/* Others  */}
		<link
			href='/images/icons-branding/favicon.ico'
			rel='shortcut icon'
			type='image/x-icon'
		/>

		{/* UC Browser   */}
		<link
			href='/images/icons-branding/icon-52.png'
			rel='apple-touch-icon-precomposed'
			sizes='57x57'
		/>
		<link
			href='/images/icons-branding/icon-72.png'
			rel='apple-touch-icon'
			sizes='72x72'
		/>

		{/* Manifest.json   */}
		<link href='/manifest.json' rel='manifest'></link>
	</Head>
);

export default Meta;
