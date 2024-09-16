import { Box, Typography, Chip } from '@mui/material';
interface Skill {
	name: string;
	// logo: string;
}

interface SkillBoxProps {
	title: string;
	skills: Skill[];
}

const SkillBox = ({ title, skills }: SkillBoxProps) => {
	return (
		<Box
			sx={{
				mb: 2,
				mt: 2,
				// background: 'linear-gradient(145deg, #333, #000106)',
				borderRadius: '15px',
				// p: '15px',
				maxWidth: '90%',
				overflow: 'hidden', // Maintains overflow handling
			}}
		>
			<Typography variant="h6" fontWeight="700" color="#5ADFCB" mb={2}>
				{title}
			</Typography>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
				{skills.map((skill) => (
					<Chip
						key={skill.name}
						// avatar={
						// 	<Avatar
						// 		src={skill.logo}
						// 		alt={skill.name}
						// 		sx={{ width: 24, height: 24 }}
						// 	/>
						// } // Adjust the size as needed
						label={skill.name}
						variant="outlined"
						sx={{
							// borderColor: 'rgba(90, 223, 203, 0.5)',
							border: '2px solid rgba(90, 223, 203, 0.5)',
							color: '#5ADFCB',
							'& .MuiChip-avatar': {
								mr: 0.5,
							},
							fontSize: '1rem', // Smaller font size if needed
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

export default SkillBox;
