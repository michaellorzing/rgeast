import path, { resolve } from 'path';

async function turnBlogsIntoPages({ graphql, actions }) {
	const blogTemplate = path.resolve('./src/templates/Blog.js');
	const { data } = await graphql(`
		query {
			blogs: allSanityBlog {
				nodes {
					title
					slug {
						current
					}
				}
			}
		}
	`);

	console.log(data);

	data.blogs.nodes.forEach((blog) => {
		actions.createPage({
			path: `/blog/${blog.slug.current}`,
			component: blogTemplate,
			context: {
				slug: blog.slug.current,
			},
		});
	});
}

export async function createPages(params) {
	// Create pages dynamically
	// Wait for all promises to be resolved before finishing this function
	await Promise.all([turnBlogsIntoPages(params)]);
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
// 	if (stage === 'build-html') {
// 		actions.setWebpackConfig({
// 			module: {
// 				rules: [
// 					// {
// 					// 	test: /autoprefixer/,
// 					// 	use: loaders.null(),
// 					// },
// 					// {
// 					// 	test: /browserslist/,
// 					// 	use: loaders.null(),
// 					// },
// 					{
// 						test: /postcss/,
// 						use: loaders.null(),
// 					},
// 				],
// 			},
// 		});
// 	}
// };

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				react: require.resolve('react'),
			},
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-react'],
							},
						},
					],
				},
			],
		},
	});
};
