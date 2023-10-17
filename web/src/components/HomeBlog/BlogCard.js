import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import {
	Box,
	Heading,
	Image,
	Text,
	Divider,
	HStack,
	Tag,
	Wrap,
	WrapItem,
	SpaceProps,
	useColorModeValue,
	Container,
	VStack,
	Button,
} from '@chakra-ui/react';

export const BlogCard = ({ blog }) => {
	const { title, metaDescription, slug, image, _rawDescription } = blog;
	return (
		<Box width={['80%', '100%']} px={2}>
			<Box borderRadius='lg' overflow='hidden'>
				<Box textDecoration='none' _hover={{ textDecoration: 'none' }}>
					<GatsbyImage image={image?.asset.gatsbyImageData} />
				</Box>
			</Box>
			<Heading fontSize='xl' marginTop='2'>
				<Text
					textDecoration='none'
					_hover={{ textDecoration: 'none' }}
					color='#33383B'>
					{title}
				</Text>
			</Heading>
			<Text as='p' fontSize='lg' marginTop='2' color={'gray.500'}>
				{metaDescription}
			</Text>
			<Link to={`/blog/${slug.current}`}>
				<Button
					bg={'orange.300'}
					rounded={'full'}
					color={'white'}
					style={{ width: '140px', bottom: 0 }}
					_hover={{ bg: 'orange.500' }}
					mt={4}>
					Read More
				</Button>
			</Link>
		</Box>
	);
};
