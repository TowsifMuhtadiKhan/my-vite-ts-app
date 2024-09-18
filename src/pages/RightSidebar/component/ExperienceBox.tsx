import { Card, Typography, Box, Chip, Link } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState } from 'react';

interface ExperienceCardProps {
	position: string;
	company: string;
	duration: string;
	description: string;
	skills: string[];
	url: string;
}

const ExperienceCard = ({
	position,
	company,
	duration,
	description,
	skills,
	url,
}: ExperienceCardProps) => {
	const [hover, setHover] = useState(false);
	return (
		<Card
			sx={{
				background: 'linear-gradient(145deg, #333, #000106)',
				color: 'white',
				p: '15px',
				position: 'relative',
				borderRadius: '15px',
				maxWidth: 500,
				mt: 3,
			}}
		>
			<Link href={url} style={{ textDecoration: 'none', color: 'inherit' }}>
				<Typography
					fontSize={'18px'}
					fontWeight={'600'}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
					color={hover ? '#5ADFCB' : ''}
					mb={0.5}
				>
					{position}, {company}
					<ArrowOutwardIcon
						sx={{
							ml: 1,
							transform: hover ? 'translateY(-4px)' : 'translateY(0)',
							transition: 'transform 0.3s ease-in-out',
							fontSize: '16px',
						}}
					/>
				</Typography>
			</Link>
			{/* <Typography variant="subtitle1">{company}</Typography> */}
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
