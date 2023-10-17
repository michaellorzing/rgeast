import React from 'react';
import { graphql } from 'gatsby';
import { Hero } from '../components/Blog/Hero';
import { Content } from '../components/Blog/Content';
import { ContactUs } from '../components/ContactUs';
import { SEO } from '../components/SEO';

export default function Blog({ data: { blog }, location }) {
	return (
		<>
			<Hero blog={blog} />
			<Content content={blog._rawDescription} header={blog.title} />
			<ContactUs />
		</>
	);
}

export const Head = ({ data: { blog } }) => {
	return (
		<SEO>
			<title>{blog.metaTitle}</title>
			<meta name='description' content={blog.metaDescription} />
		</SEO>
	);
};

export const query = graphql`
	query ($slug: String!) {
		blog: sanityBlog(slug: { current: { eq: $slug } }) {
			title
			metaTitle
			metaDescription
			slug {
				current
			}
			image {
				asset {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
			_rawDescription
		}
	}
`;
