import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
	Box,
	Hide,
} from '@chakra-ui/react';
import {
	MdOutlineBathroom,
	MdOutlineKitchen,
	MdOutlineConstruction,
} from 'react-icons/md';

const Feature = ({ text, icon, iconBg }) => {
	return (
		<Stack direction={'row'} align={'center'}>
			<Flex
				w={8}
				h={8}
				align={'center'}
				justify={'center'}
				rounded={'full'}
				bg={iconBg}>
				{icon}
			</Flex>
			<Text fontWeight={600} fontSize='xl' ml={2}>
				{text}
			</Text>
		</Stack>
	);
};

export const AboutUs = ({ header, body, image }) => {
	return (
		<Box background='#F6F9FC'>
			<Container maxW={'8xl'} py={[10, 20, 40]}>
				<a id='about' />
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={14}>
					<Stack spacing={4}>
						<Text
							textTransform={'uppercase'}
							color={'blue.400'}
							fontWeight={600}
							fontSize={'sm'}
							bg={useColorModeValue('blue.50', 'blue.900')}
							p={2}
							alignSelf={'flex-start'}
							rounded={'md'}>
							Our Story
						</Text>
						<Heading color='#33383B'>{header}</Heading>
						<Text color={'gray.500'} fontSize={'lg'}>
							{body}
						</Text>
						<Stack
							spacing={4}
							divider={
								<StackDivider
									borderColor={useColorModeValue('gray.100', 'gray.700')}
								/>
							}>
							<Feature
								icon={
									<Icon as={MdOutlineBathroom} color={'blue.500'} w={5} h={5} />
								}
								iconBg={useColorModeValue('blue.100', 'blue.900')}
								text={'Bathrooms'}
							/>
							<Feature
								icon={
									<Icon
										as={MdOutlineKitchen}
										color={'orange.500'}
										w={5}
										h={5}
									/>
								}
								iconBg={useColorModeValue('orange.100', 'orange.900')}
								text={'Kitchens'}
							/>
							<Feature
								icon={
									<Icon
										as={MdOutlineConstruction}
										color={'purple.500'}
										w={5}
										h={5}
									/>
								}
								iconBg={useColorModeValue('purple.100', 'purple.900')}
								text={'General Contracting'}
							/>
						</Stack>
					</Stack>
					<Hide below='md'>
						<Flex>
							<GatsbyImage
								image={image?.asset.gatsbyImageData}
								style={{
									borderRadius: '20px',
									boxShadow:
										'0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
								}}
							/>
						</Flex>
					</Hide>
				</SimpleGrid>
			</Container>
		</Box>
	);
};
