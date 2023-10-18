import React, { useState, useEffect } from 'react';
import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from '@chakra-ui/react';
import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
	MdOutlinePhone,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
	const [fields, setFields] = useState({
		name: '',
		phone: null,
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => emailjs.init('GzcK9aXaFaf5QiE62'), []);

	const handleChange = (e, type) => {
		const { value, name } = e.target;

		setFields({
			...fields,
			[type]: value,
		});
	};

	const { name, email, message, phone } = fields;
	const handleSubmit = async (e) => {
		e.preventDefault();
		const serviceId = 'service_hij4hiq';
		const templateId = 'template_lpauf37';
		try {
			setLoading(true);
			await emailjs.send(serviceId, templateId, {
				name,
				recipient: 'rgeconstruction@gmail.com',
				phone,
				email,
				message,
			});
			alert(`Thanks for reaching out! We'll be in touch soon!`);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Container
			bg='#F6F9FC'
			maxW='full'
			mt={0}
			centerContent
			overflow='hidden'
			py={20}>
			<a id='contact' />

			<Flex>
				<Box
					bg='#4299E1'
					color='white'
					borderRadius='lg'
					boxShadow='dark-lg'
					m={{ sm: 4, md: 16, lg: 10 }}
					p={{ sm: 5, md: 5, lg: 16 }}>
					<Box p={{base: 3, md: 3, lg: 1}}>
						<Wrap
							spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
							display='flex'
							justify='center'>
							<WrapItem>
								<Box>
									<VStack>
										<Heading>How Can We Help You?</Heading>
										<Text
											mt={{ sm: 3, md: 3, lg: 5 }}
											color='white.500'
											fontWeight={500}>
											Let us help you turn your dreams into reality
										</Text>
									</VStack>

									<Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
										<VStack
											pl={0}
											spacing={1}
											alignItems='center'
											justifyContent='center'>
											<a href='tel:+6093396985'>
												<Button
													size='lg'
													height='48px'
													width='200px'
													variant='ghost'
													color='#DCE2FF'
													style={{ minWidth: '300px' }}
													_hover={{ border: '2px solid #F6AD55' }}
													leftIcon={<MdPhone color='F6AD55' size='20px' />}>
													<Text>(609) 339-6985</Text>
												</Button>
											</a>
											<a href='mailto: rgeconstruction@gmail.com'>
												<Button
													size='lg'
													height='48px'
													width='200px'
													variant='ghost'
													color='#DCE2FF'
													style={{ minWidth: '300px' }}
													_hover={{ border: '2px solid #F6AD55' }}
													leftIcon={<MdEmail color='#F6AD55' size='20px' />}>
													<Text>rgeconstruction@gmail.com</Text>
												</Button>
											</a>
											<a
												href='https://www.google.com/maps/place/Brick+Township,+NJ/@40.0690972,-74.1882458,12z/data=!3m1!4b1!4m6!3m5!1s0x89c182aa7b13512b:0x8189bef7c0280c6b!8m2!3d40.0578384!4d-74.1371832!16zL20vMHhyOXI?entry=ttu'
												target='_blank'>
												<Button
													size='lg'
													height='48px'
													width='200px'
													variant='ghost'
													color='#DCE2FF'
													style={{ minWidth: '300px' }}
													_hover={{ border: '2px solid #F6AD55' }}
													leftIcon={
														<MdLocationOn color='#F6AD55' size='20px' />
													}>
													<Text>Brick, NJ</Text>
												</Button>
											</a>
										</VStack>
									</Box>
									<HStack
										mt={{ lg: 4, md: 4 }}
										spacing={3}
										alignItems='center'
										justifyContent='center'>
										<a
											href='https://www.facebook.com/R.G.EASTCONSTRUCTION/'
											target='_blank'>
											<IconButton
												aria-label='facebook'
												variant='ghost'
												size='lg'
												isRound={true}
												color='whiteAlpha.700'
												_hover={{ bg: '#F6AD55' }}
												icon={<MdFacebook size='50px' />}
											/>
										</a>
									</HStack>
								</Box>
							</WrapItem>
							<WrapItem>
								<Box bg='white' borderRadius='lg'>
									<Box m={8} color='#0B0E3F'>
										<VStack spacing={4}>
											<FormControl>
												<FormLabel>Name</FormLabel>
												<InputGroup
													borderColor='#E0E1E7'
													name='name'
													value={name}
													onChange={(e) => handleChange(e, 'name')}>
													<InputLeftElement pointerEvents='none'>
														<BsPerson color='gray.800' />
													</InputLeftElement>
													<Input type='text' size='md' />
												</InputGroup>
											</FormControl>
											<FormControl
												id='phone'
												name='phone'
												value={phone}
												onChange={(e) => handleChange(e, 'phone')}>
												<FormLabel>Phone</FormLabel>
												<InputGroup borderColor='#E0E1E7'>
													<InputLeftElement pointerEvents='none'>
														<MdOutlinePhone color='gray.800' />
													</InputLeftElement>
													<Input type='text' size='md' />
												</InputGroup>
											</FormControl>
											<FormControl
												id='name'
												name='email'
												value={email}
												onChange={(e) => handleChange(e, 'email')}>
												<FormLabel>Email</FormLabel>
												<InputGroup borderColor='#E0E1E7'>
													<InputLeftElement pointerEvents='none'>
														<MdOutlineEmail color='gray.800' />
													</InputLeftElement>
													<Input type='text' size='md' />
												</InputGroup>
											</FormControl>
											<FormControl
												id='name'
												name='message'
												value={message}
												onChange={(e) => handleChange(e, 'message')}>
												<FormLabel>Message</FormLabel>
												<Textarea
													borderColor='gray.300'
													_hover={{
														borderRadius: 'gray.300',
													}}
													placeholder='Tell us more'
												/>
											</FormControl>
											<FormControl id='name' float='right'>
												<Button
													bg={'orange.300'}
													rounded={'full'}
													color={'white'}
													onClick={(e) => handleSubmit(e)}
													style={{ width: '140px' }}
													_hover={{ bg: 'orange.500' }}>
													Contact Us
												</Button>
											</FormControl>
										</VStack>
									</Box>
								</Box>
							</WrapItem>
						</Wrap>
					</Box>
				</Box>
			</Flex>
		</Container>
	);
};
