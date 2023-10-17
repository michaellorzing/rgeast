import React, { useState } from 'react';

import {
	Container,
	IconButton,
	useBreakpointValue,
	Box,
	Flex,
	Grid,
	HStack,
	SimpleGrid,
	Heading,
} from '@chakra-ui/react';

import { BlogCard } from './BlogCard';

export const HomeBlog = ({ blogs }) => {
	return (
		<Container maxW='80vw'>
			<Heading pt={20} textAlign='center' color='#33383B'>
				Tips For Keeping Your Home Looking Its Best
			</Heading>
			<SimpleGrid
				bg='white'
				mt={0}
				pt={10}
				pb={20}
				mb={10}
				justifyContent='center'
				alignItems='flex-start'
				columns={[1, 1, 2, 3]}
				gap={6}>
				{blogs.map((blog, index) => (
					<BlogCard key={index} blog={blog} />
				))}
			</SimpleGrid>
		</Container>
	);
};
