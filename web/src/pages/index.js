import * as React from 'react';
import { graphql } from 'gatsby';

import { Hero } from '../components/Home/Hero';
import { AboutUs } from '../components/AboutUs';
import { Projects } from '../components/Projects';
import { ContactUs } from '../components/ContactUs';
import { HomeBlog } from '../components/HomeBlog';
import { SEO } from '../components/SEO';

const IndexPage = ({ data }) => {
	const home = data.home.edges[0].node;

	const {
		heroImage,
		heroSubheader,
		aboutUsHeader,
		aboutUsBody,
		aboutUsImage,
		projects,
		blogs,
	} = home;
	return (
		<>
			<Hero heroImage={heroImage} subheader={heroSubheader} />
			<AboutUs header={aboutUsHeader} body={aboutUsBody} image={aboutUsImage} />
			<Projects projects={projects} />
			<ContactUs />
			<HomeBlog blogs={blogs} />
		</>
	);
};

export default IndexPage;

export const Head = ({ data }) => {
	const home = data.home.edges[0].node;
	return (
		<SEO>
			<title>{home.metaTitle}</title>
			<meta name='description' content={home.metaDescription} />
		</SEO>
	);
};

export const query = graphql`
	query HomePageQuery {
		home: allSanityHome {
			edges {
				node {
					metaTitle
					metaDescription
					heroImage {
						asset {
							gatsbyImageData
						}
					}
					heroHeader
					heroSubheader
					aboutUsHeader
					aboutUsBody
					aboutUsImage {
						asset {
							gatsbyImageData(placeholder: BLURRED)
						}
					}
					workHeader
					projects {
						_key
						title
						description
						image {
							asset {
								gatsbyImageData(placeholder: BLURRED)
							}
						}
					}
					blogs {
						_key
						title
						metaTitle
						metaDescription
						slug {
							current
						}
						image {
							asset {
								gatsbyImageData(placeholder: BLURRED, height: 275)
							}
						}
						_rawDescription
					}
				}
			}
		}
	}
`;
