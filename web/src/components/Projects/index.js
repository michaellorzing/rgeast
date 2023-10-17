import React, { useState } from 'react';
import {
	Box,
	IconButton,
	useBreakpointValue,
	Stack,
	Heading,
	Text,
	Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export const Projects = ({ projects }) => {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = useState(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: '90%', md: '50%' });
	const side = useBreakpointValue({ base: '30%', md: '40px' });

	return (
		<Box
			position={'relative'}
			height={'600px'}
			width={'full'}
			overflow={'hidden'}>
			<a id='projects' />
			{/* CSS files for react-slick */}
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
			/>
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
			/>
			{/* Left Icon */}
			<IconButton
				aria-label='left-arrow'
				variant='ghost'
				position='absolute'
				left={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickPrev()}>
				<BiLeftArrowAlt size='40px' color='#4299E1' />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label='right-arrow'
				variant='ghost'
				position='absolute'
				right={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickNext()}>
				<BiRightArrowAlt size='40px' color='#4299E1' />
			</IconButton>
			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{projects.map((p, index) => (
					<Box
						key={index}
						height={'6xl'}
						position='relative'
						backgroundPosition='center'
						backgroundRepeat='no-repeat'
						backgroundSize='cover'
						filter='grayscale(40%)'
						backgroundImage={`url(${p.image.asset.gatsbyImageData.images.fallback.src})`}>
						{/* This is the block you need to change, to customize the caption */}
						<Container size='container.lg' height='600px' position='relative'>
							<Stack
								spacing={2}
								w={'full'}
								maxW={'lg'}
								position='absolute'
								top='50%'
								transform='translate(0, -50%)'>
								<Box
									backdropFilter='auto'
									backdropContrast='30%'
									width={['sm', '2xl']}
									p={5}
									borderRadius='10px'>
									<Heading
										fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
										py={1}
										color='white'>
										{p.title}
									</Heading>
									<Text
										fontSize={{ base: 'md', lg: '2xl' }}
										color='white'
										lineHeight={1.4}>
										{p.description}
									</Text>
								</Box>
							</Stack>
						</Container>
					</Box>
				))}
			</Slider>
		</Box>
	);
};
