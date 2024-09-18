import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import data from '../../assets/data.json';
import Navbar from './navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const LeftPart = () => {
	const titles = data.titles;
	const [currentTitle, setCurrentTitle] = useState('');
	const [titleIndex, setTitleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleScroll = (id: string, index: number) => {
		setSelectedIndex(index);
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const chars = titles[titleIndex].split('');

		if (charIndex < chars.length) {
			const timeoutId = setTimeout(() => {
				setCurrentTitle((current) => current + chars[charIndex]);
				setCharIndex(charIndex + 1);
			}, 100);

			return () => clearTimeout(timeoutId);
		} else {
			const timeoutId = setTimeout(() => {
				const nextTitleIndex = (titleIndex + 1) % titles.length;
				setCurrentTitle(titles[nextTitleIndex].substring(0, 1));
				setTitleIndex(nextTitleIndex);
				setCharIndex(1);
			}, 2000);

			return () => clearTimeout(timeoutId);
		}
	}, [charIndex, titles, titleIndex]);
	return (
		<Box
			id="home"
			sx={{
				display: 'flex',
				justifyContent: { xs: 'center', md: 'flex-end' },
				width: '100%',
			}}
		>
			<Stack
				sx={{
					width: { xs: '100%', md: '60%' },
					p: { xs: 5, md: 0 },
					pt: { xs: 10, md: 15 },
				}}
			>
				{' '}
				<Typography
					fontSize={{
						xs: '30px',
						md: '48px',
					}}
					fontWeight={'700'}
				>
					{data.name}
				</Typography>
				<Typography
					fontSize={{
						xs: '24px',
						md: '26px',
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
					color="rgba(255, 255, 255, 0.6)"
					pr={2}
				>
					{data.description}
				</Typography>
				<Box
					mt={'26px'}
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						gap: { xs: 2, sm: 0 },
					}}
				>
					<a
						href={data.links.github}
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: 'none' }}
					>
						<Button
							startIcon={<GitHubIcon />}
							sx={{
								bgcolor: 'rgba(255, 255, 255, 0.4)',
								color: 'white',
								'&:hover': {
									bgcolor: 'rgba(255, 255, 255, 0.2)',
								},
								mr: 2,
								padding: 1,
							}}
						>
							GitHub Profile
						</Button>
					</a>
					<a
						href={data.links.resume}
						download
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: 'none' }}
					>
						<Button
							startIcon={<FileDownloadIcon />}
							sx={{
								bgcolor: 'rgba(90, 223, 203, 0.5)',
								color: 'white',
								'&:hover': {
									bgcolor: 'rgba(90, 223, 203, 0.2)',
								},
								padding: 1,
							}}
						>
							Download Resume
						</Button>
					</a>
				</Box>
			</Stack>
			<Navbar selectedIndex={selectedIndex} handleScroll={handleScroll} />
		</Box>
	);
};

export default LeftPart;
