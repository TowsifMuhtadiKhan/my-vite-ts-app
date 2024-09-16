import { Card, Typography, Box, Chip } from '@mui/material';

interface ExperienceCardProps {
	position: string;
	company: string;
	duration: string;
	description: string;
	skills: string[]; // Assuming skills are an array of strings
}

const ExperienceCard = ({
	position,
	company,
	duration,
	description,
	skills,
}: ExperienceCardProps) => {
	return (
		<Card
			sx={{
				background: 'linear-gradient(145deg, #333, #000106)',
				color: 'white',
				p: '15px',
				position: 'relative',
				borderRadius: '15px',
				maxWidth: 500,
				mt: 5,
			}}
		>
			<Typography variant="h5" fontWeight={'700'}>
				{position}
			</Typography>
			<Typography variant="subtitle1">{company}</Typography>
			<Typography variant="subtitle2" sx={{ mb: 1 }}>
				{duration}
			</Typography>
			<Typography variant="body2" sx={{ mb: 2 }}>
				{description}
			</Typography>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
				{skills.map((skill) => (
					<Chip
						key={skill}
						label={skill}
						variant="outlined"
						sx={{ borderColor: '#5ADFCB', color: '#5ADFCB' }}
					/>
				))}
			</Box>
		</Card>
	);
};

export default ExperienceCard;
