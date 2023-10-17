const path = require('path');

// async function turnBlogsIntoPages({ graphql, actions }) {
// 	const blogTemplate = path.resolve('./src/templates/Blog.js');
// 	const { data } = await graphql(`
// 		query {
// 			blogs: allSanityBlog {
// 				nodes {
// 					title
// 					slug {
// 						current
// 					}
// 				}
// 			}
// 		}
// 	`);

// 	console.log(data);

// 	data.blogs.nodes.forEach((blog) => {
// 		actions.createPage({
// 			path: `/blog/${blog.slug.current}`,
// 			component: blogTemplate,
// 			context: {
// 				slug: blog.slug.current,
// 			},
// 		});
// 	});
// }

// export async function createPages(params) {
// 	// Create pages dynamically
// 	// Wait for all promises to be resolved before finishing this function
// 	await Promise.all([turnBlogsIntoPages(params)]);
// }

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve(`src/templates/Blog.js`);
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
	data.blogs.nodes.forEach((blog) => {
		createPage({
			path: `/blog/${blog.slug.current}`,
			component: blogTemplate,
			context: {
				slug: blog.slug.current,
			},
		});
	});
};
