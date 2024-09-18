import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import SkillBox from './component/Skillbox';
import ExperienceCard from './component/ExperienceBox';
import data from '../../assets/data.json';
import ProjectShowCase from './component/ProjectShowcase';
import { useState } from 'react';

const RightSide = () => {
	const skills = data.skills;
	const experiences = data.experiences;
	const projects = data.projects;

	const [selectedTab, setSelectedTab] = useState(0); // State for managing selected tab

	// Handle tab change
	const handleTabChange = (_: any, newValue: any) => {
		setSelectedTab(newValue);
	};
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: { xs: 'center', md: 'flex-start' },
				width: '100%',
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
					id="aboutMe"
					fontSize={{
						xs: '26px',
						md: '32px',
					}}
					fontWeight={'600'}
					mb={2}
				>
					About Me
				</Typography>
				<Typography fontSize={'16px'} fontWeight={'400'} color="rgba(255, 255, 255, 0.6)">
					{data.aboutMe}
				</Typography>
				<Typography
					id="skills"
					fontSize={{
						xs: '26px',
						md: '32px',
					}}
					fontWeight={'600'}
					mt={'45px'}
					mb={2}
				>
					My Skill
				</Typography>
				{skills.map((skill) => (
					<SkillBox key={skill.title} title={skill.title} skills={skill.list} />
				))}
				<Typography
					id="experience"
					fontSize={{ xs: '26px', md: '32px' }}
					fontWeight={'700'}
				>
					Experience
				</Typography>
				<Box>
					{experiences.map((exp, index) => (
						<ExperienceCard key={index} {...exp} />
					))}
				</Box>
				<Typography
					id="projects"
					fontSize={{ xs: '26px', md: '32px' }}
					fontWeight={'700'}
					mt={'45px'}
				>
					Projects
				</Typography>
				<Tabs
					value={selectedTab}
					onChange={handleTabChange}
					aria-label="category tabs"
					TabIndicatorProps={{
						style: { background: '#5ADFCB' },
					}}
				>
					<Tab
						label="Web Development"
						sx={{
							color: 'rgba(90, 223, 203, 0.5)',
							'&:hover': {
								color: 'rgba(90, 223, 203, 0.9)',
							},
							'&.Mui-selected': {
								color: '#5ADFCB',
								bgcolor: 'rgba(90, 223, 203, 0.1)',
								outline: 'none !important',
							},
						}}
					/>
					<Tab
						label="Graphics"
						sx={{
							color: 'rgba(90, 223, 203, 0.5)', // Default color
							'&:hover': {
								color: 'rgba(90, 223, 203, 0.9)', // Hover color
							},
							'&.Mui-selected': {
								color: '#5ADFCB',
								bgcolor: 'rgba(90, 223, 203, 0.1)',
								outline: 'none !important', // Selected tab color
							},
						}}
					/>
					<Tab
						label="UI Design"
						sx={{
							color: 'rgba(90, 223, 203, 0.5)', // Default color
							'&:hover': {
								color: 'rgba(90, 223, 203, 0.9)', // Hover color
							},
							'&.Mui-selected': {
								color: '#5ADFCB', // Selected tab color
								bgcolor: 'rgba(90, 223, 203, 0.1)',
								outline: 'none !important',
							},
						}}
					/>
				</Tabs>

				{/* Conditional Content Rendering Based on Selected Tab */}
				<Box sx={{ mt: 3 }}>
					{selectedTab === 0 && (
						<Typography variant="body1">
							{projects.map((exp, index) => (
								<ProjectShowCase key={index} {...exp} />
							))}
						</Typography>
					)}
					{selectedTab === 1 && <Typography variant="body1">Comming Soon</Typography>}
					{selectedTab === 2 && <Typography variant="body1">Comming Soon</Typography>}
				</Box>
			</Stack>
		</Box>
	);
};

export default RightSide;
