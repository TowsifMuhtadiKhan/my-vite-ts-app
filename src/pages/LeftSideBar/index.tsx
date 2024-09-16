import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const LeftPart = () => {
	const titles = ['Frontend Engineer', 'Graphics Designer', 'UI Designer'];
	const [currentTitle, setCurrentTitle] = useState('');
	const [titleIndex, setTitleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);

	useEffect(() => {
		// Split the current title into characters
		const chars = titles[titleIndex].split('');

		// Start typing out the title character by character
		if (charIndex < chars.length) {
			const timeoutId = setTimeout(() => {
				setCurrentTitle((current) => current + chars[charIndex]);
				setCharIndex(charIndex + 1);
			}, 100); // Time between characters appearing

			return () => clearTimeout(timeoutId);
		} else {
			// Prepare to transition to the next title
			const timeoutId = setTimeout(() => {
				// Cycle to the next title, but start displaying it immediately
				const nextTitleIndex = (titleIndex + 1) % titles.length;
				setCurrentTitle(titles[nextTitleIndex].substring(0, 1)); // Start the next title with the first character
				setTitleIndex(nextTitleIndex);
				setCharIndex(1); // Start from the second character for the next cycle
			}, 2000); // Delay before switching to the next title

			return () => clearTimeout(timeoutId);
		}
	}, [charIndex, titles, titleIndex]);
	return (
		<Box
			sx={{
				display: 'flex', // Sets display to flex to use flexbox properties
				justifyContent: { xs: 'center', md: 'flex-end' }, // Centers content horizontally
				width: '100%', // Adjust width as needed, 100% to fill the container
			}}
		>
			<Stack
				sx={{
					width: { xs: '100%', md: '60%' },
					p: { xs: 10, md: 0 },
					pt: { xs: 10, md: 15 },
				}}
			>
				{' '}
				<Typography
					fontSize={{
						xs: '34px', // Smaller font size on extra-small devices
						md: '46px', // Larger font size on medium and larger devices
					}}
					fontWeight={'700'}
				>
					Towsif Muhtadi khan
				</Typography>
				<Typography
					fontSize={{
						xs: '26px',
						md: '36px',
					}}
					fontWeight={'500'}
					color="#5ADFCB"
				>
					{currentTitle}
				</Typography>
				<Typography
					fontSize={'16px'}
					fontWeight={'400'}
					mt={'26px'}
					color="rgba(255, 255, 255, 0.5)"
				>
					I craft seamless digital solutions across web, mobile, and beyond.
				</Typography>
				<Box mt={'26px'}>
					<a
						href="https://github.com/TowsifMuhtadiKhan"
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: 'none' }}
					>
						<Button
							sx={{
								bgcolor: 'rgba(255, 255, 255, 0.4)', // Background color using theme's primary color
								color: 'white', // Text color
								'&:hover': {
									bgcolor: 'rgba(255, 255, 255, 0.2)', // Darker on hover
								},
								mr: 2,
							}}
						>
							GitHub Profile
						</Button>
					</a>
					<a
						href="https://drive.google.com/drive/folders/1reYxUwhGxdc1q1IOiJFK-Ygr24dhXE5Z"
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: 'none' }}
					>
						<Button
							sx={{
								bgcolor: 'rgba(90, 223, 203, 0.5)', // Background color using theme's secondary color
								color: 'white', // Text color
								'&:hover': {
									bgcolor: 'rgba(90, 223, 203, 0.2)', // Darker on hover
								},
							}}
						>
							Download Resume
						</Button>
					</a>
				</Box>
			</Stack>
		</Box>
	);
};

export default LeftPart;
