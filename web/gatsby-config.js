/**
 * @type {import('gatsby').GatsbyConfig}
 */
// require('dotenv').config({
// 	path: `.env`,
// });

const isProd = process.env.NODE_ENV === 'production';
const previewEnabled =
	(process.env.GATSBY_IS_PREVIEW || 'false').toLowerCase() === 'true';

module.exports = {
	siteMetadata: {
		title: `web`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: 'jnriarh8',
				dataset: 'production',
				watchMode: !isProd, // watchMode only in dev mode
				overlayDrafts: !isProd || previewEnabled,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'@chakra-ui/gatsby-plugin',
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-T7397P5B',
				enableWebVitalsTracking: true,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		// {
		// 	resolve: 'gatsby-plugin-favicons',
		// 	options: {
		// 		logo: './src/favicon/logo.svg',
		// 		appName: 'RGE Construction',
		// 		background: '#fff',
		// 		icons: {
		// 			android: true,
		// 			appleIcon: true,
		// 			appleStartup: true,
		// 			coast: false,
		// 			favicons: true,
		// 			yandex: false,
		// 			windows: false,
		// 		},
		// 	},
		// },
	],
};
