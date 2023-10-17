import React from 'react';

import {
	Stack,
	Flex,
	Button,
	Text,
	VStack,
	useBreakpointValue,
} from '@chakra-ui/react';

export const Hero = ({ blog }) => {
	const { title, image } = blog;
	return (
		<Flex
			w={'full'}
			h={'50vh'}
			backgroundImage={`url(${image?.asset?.gatsbyImageData.images.fallback.src})`}
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
						color={'white'}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
						Realize Your Home's Full Potential
					</Text>
				</Stack>
			</VStack>
		</Flex>
	);
};
