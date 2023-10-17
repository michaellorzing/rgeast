import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import { Layout } from './src/components/Layout/Layout';

export function wrapPageElement({ element, props }) {
	return <ChakraProvider><Layout {...props}>{element}</Layout></ChakraProvider>;
}
