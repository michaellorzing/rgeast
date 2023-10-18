import React from 'react';
import PortableText from 'react-portable-text';

import { Heading, Text, Container, VStack, Box } from '@chakra-ui/react';

export const Content = ({ content, header }) => {
	return (
		<Container maxW={['90vw', '80vw']} pt={18} pb={20}>
			<VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
				<Heading py={2} color='#33383B'>
					{header}
				</Heading>
				<PortableText
					content={content}
					serializers={{
						normal: ({ children }) => (
							<Box>
								<Text as='p' fontSize='2xl' color={'gray.500'}>
									{children}
								</Text>
							</Box>
						),
					}}
				/>
			</VStack>
		</Container>
	);
};
