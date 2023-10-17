import React from 'react';

import {
	Stack,
	Flex,
	Button,
	Text,
	VStack,
	useBreakpointValue,
} from '@chakra-ui/react';

export const Hero = ({ heroImage, subheader }) => {
	return (
		<Flex
			w={'full'}
			h={'70vh'}
			backgroundImage={`url(${heroImage?.asset?.gatsbyImageData.images.fallback.src})`}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}>
			<VStack
				w={'full'}
				justify={'center'}
				px={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={'linear(to-r, blackAlpha.700, blackAlpha.500)'}
				blur='20px'>
				<Stack maxW={'4xl'} align={'flex-start'} spacing={4}>
					<Text
						color={'#4299E1'}
						fontWeight={400}
						lineHeight={0.8}
						style={{ marginBottom: '-1rem' }}
						fontSize={useBreakpointValue({ base: 'lg', md: '2xl' })}>
						RGE CONSTRUCTION
					</Text>
					<Text
						color={'white'}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}>
						Your <span style={{ color: '#4299E1' }}>Trusted</span> Family
						Contractor
					</Text>
					<Text
						color={'white'}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
						{subheader}
					</Text>

					<Stack direction={'row'} mt={2}>
						<a href='#projects'>
							<Button
								bg={'blue.400'}
								rounded={'full'}
								color={'white'}
								style={{ width: '140px' }}
								_hover={{ bg: 'blue.500' }}>
								Show Me More
							</Button>
						</a>
						<a href='#contact'>
							<Button
								bg={'orange.300'}
								rounded={'full'}
								color={'white'}
								style={{ width: '140px' }}
								_hover={{ bg: 'orange.500' }}>
								Contact Us
							</Button>
						</a>
					</Stack>
				</Stack>
			</VStack>
		</Flex>
	);
};
