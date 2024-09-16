import { Box, Stack, Typography } from '@mui/material';
import SkillBox from './component/Skillbox';
import ExperienceCard from './component/ExperienceBox';
import { useEffect, useState } from 'react';

const RightSide = () => {
	const titles = ['Frontend Engineer', 'Graphics Designer', 'UI Designer'];
	const [, setCurrentTitle] = useState('');
	const [titleIndex, setTitleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);

	const skills = [
		{
			title: 'Programming Languages',
			list: [
				{ name: 'C', logo: '/path-to-c-logo.png' },
				{ name: 'Python', logo: '/path-to-cpp-logo.png' },
				{ name: 'PHP', logo: '/path-to-cpp-logo.png' },
				{ name: 'React JS', logo: '/path-to-cpp-logo.png' },
				{ name: 'HTML', logo: '/path-to-cpp-logo.png' },
				{ name: 'CSS', logo: '/path-to-cpp-logo.png' },
				{ name: 'Tailwind CSS', logo: '/path-to-cpp-logo.png' },
			],
		},
		{
			title: 'Frontend Development',
			list: [
				{ name: 'React', logo: '/path-to-react-logo.png' },
				{ name: 'Redux', logo: '/path-to-redux-logo.png' },
				{ name: 'Material UI', logo: '/path-to-materialui-logo.png' },
				{ name: 'TypeScript', logo: '/path-to-react-logo.png' },
				{ name: 'Tailwind CSS', logo: '/path-to-redux-logo.png' },
				{ name: 'Material UI', logo: '/path-to-materialui-logo.png' },
			],
		},
		{
			title: 'Backend Development',
			list: [{ name: 'MySQL', logo: '/path-to-react-logo.png' }],
		},
	];
	const experiences = [
		{
			position: 'Frontend Engineer',
			company: 'Sense & Respond Software LLC',
			duration: 'November 2023 - Present',
			description:
				'Enhancing user experiences and developing skills while working at Sense & Respond Software LLC.',
			skills: ['React.js', 'Redux Toolkit', 'Material UI', 'TypeScript', 'API'],
		},
		{
			position: 'Junior Web Developer',
			company: 'CPSD Technologies Ltd.',
			duration: 'February 2023 - October 2023',
			description:
				'Enhancing user experiences and developing skills while working at CPSD Technologies Ltd.',
			skills: ['HTML', 'CSS', 'Tailwind CSS', 'jS', 'API'],
		},
		// Add more experiences as needed
	];

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
				justifyContent: { xs: 'center', md: 'flex-start' }, // Centers content horizontally
				width: '100%', // Adjust width as needed, 100% to fill the container
			}}
		>
			<Stack
				sx={{
					width: { xs: '100%', md: '60%' },
					p: { xs: 5, md: 0 },
					pt: { xs: 0, md: 15 },
				}}
			>
				<Typography
					fontSize={{
						xs: '30px', // Smaller font size on extra-small devices
						md: '36px', // Larger font size on medium and larger devices
					}}
					fontWeight={'600'}
				>
					About Me
				</Typography>
				<Typography fontSize={'16px'} fontWeight={'400'} color="rgba(255, 255, 255, 0.5)">
					I am a driven and adaptable individual, consistently eager to embrace new
					challenges. My passion for learning fuels my commitment to delivering
					high-quality results. With a positive attitude and a growth mindset, I am
					prepared to make a meaningful impact and achieve remarkable success.
				</Typography>
				<Typography
					fontSize={{
						xs: '30px', // Smaller font size on extra-small devices
						md: '36px', // Larger font size on medium and larger devices
					}}
					fontWeight={'600'}
					mt={'45px'}
				>
					My Skill
				</Typography>
				{skills.map((skill) => (
					<SkillBox key={skill.title} title={skill.title} skills={skill.list} />
				))}
				<Typography fontSize={'36px'} fontWeight={'700'} mt={'45px'}>
					Experience
				</Typography>
				<Box>
					{experiences.map((exp, index) => (
						<ExperienceCard key={index} {...exp} />
					))}
				</Box>
			</Stack>
		</Box>
	);
};

export default RightSide;
