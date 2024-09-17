import { Box, Stack, Typography } from '@mui/material';
import SkillBox from './component/Skillbox';
import ExperienceCard from './component/ExperienceBox';
import data from '../../assets/data.json';

const RightSide = () => {
	const skills = data.skills;
	const experiences = data.experiences;
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
						xs: '30px',
						md: '36px',
					}}
					fontWeight={'600'}
				>
					About Me
				</Typography>
				<Typography fontSize={'16px'} fontWeight={'400'} color="rgba(255, 255, 255, 0.5)">
					{data.aboutMe}
				</Typography>
				<Typography
					id="skills"
					fontSize={{
						xs: '30px',
						md: '36px',
					}}
					fontWeight={'600'}
					mt={'45px'}
				>
					My Skill
				</Typography>
				{skills.map((skill) => (
					<SkillBox key={skill.title} title={skill.title} skills={skill.list} />
				))}
				<Typography id="experience" fontSize={'36px'} fontWeight={'700'} mt={'45px'}>
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
