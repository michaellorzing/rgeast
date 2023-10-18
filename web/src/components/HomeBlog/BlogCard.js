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
		<Box
			width={['100%', '95%']}
			mx={2}
			my={[6, 0]}
			p={[4, 6]}
			h={{ base: '800px', sm: '750px', lg: '750px', xl: '780px' }}
			borderColor='gray.200'
			// border='1px'
			style={{
				position: 'relative',
				boxShadow:
					'0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
			}}
			borderRadius='lg'>
			<Box borderRadius='lg' overflow='hidden' mb={8}>
				<GatsbyImage
					image={image?.asset.gatsbyImageData}
					imgStyle={{ objectFit: 'contain' }}
				/>
			</Box>
			<Heading fontSize='xl' marginTop='2'>
				<Text
					textDecoration='none'
					_hover={{ textDecoration: 'none' }}
					color='#33383B'>
					{title}
				</Text>
			</Heading>
			<Text
				as='p'
				marginTop='2'
				fontSize={{ base: 18, sm: 16, md: 16, lg: 18 }}
				color={'gray.500'}>
				{metaDescription}
			</Text>
			<Link to={`/blog/${slug.current}`}>
				<Button
					bg={'orange.300'}
					rounded={'full'}
					color={'white'}
					mb={[8, 4]}
					style={{ width: '140px', bottom: 0, position: 'absolute' }}
					_hover={{ bg: 'orange.500' }}
					mt={4}>
					Read More
				</Button>
			</Link>
		</Box>
	);
};
