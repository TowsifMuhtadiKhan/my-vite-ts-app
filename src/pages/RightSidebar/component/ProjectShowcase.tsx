import { Card, CardMedia, Typography, Chip, Box, Link } from '@mui/material';
import { useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
interface ProjectShowCaseProps {
	imageUrl: string;
	title: string;
	description: string;
	tools: string[];
	url: string;
}

const ProjectShowCase = ({ imageUrl, title, description, tools, url }: ProjectShowCaseProps) => {
	const [hover, setHover] = useState(false);
	return (
		<Card
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			sx={{
				background: hover ? 'rgba(90, 223, 203, 0.1)' : 'transparent',
				color: 'white',
				p: '15px',
				position: 'relative',
				borderRadius: '15px',
				maxWidth: '100%',
				mt: 3,
			}}
		>
			<Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
				<CardMedia
					component="img"
					sx={{ width: { md: 500 }, height: { xs: 150 }, maxWidth: '100%' }}
					image={imageUrl}
					alt="Project Image"
				/>
				<Box>
					<Link href={url} style={{ textDecoration: 'none', color: 'inherit' }}>
						<Box display={'flex'} flexDirection={'row'}>
							<Typography variant="h6" color={hover ? '#5ADFCB' : ''}>
								{title}

								<ArrowOutwardIcon
									sx={{
										ml: 1,
										transform: hover ? 'translateY(-4px)' : 'translateY(0)',
										transition: 'transform 0.3s ease-in-out',
										fontSize: '16px',
									}}
								/>
							</Typography>
						</Box>
					</Link>

					<Typography variant="body2" color="white" sx={{ mb: 2 }}>
						{description}
					</Typography>

					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
						{tools.map((tool) => (
							<Chip
								key={tool}
								label={tool}
								variant="outlined"
								sx={{ borderColor: '#5ADFCB', color: '#5ADFCB' }}
							/>
						))}
					</Box>
				</Box>
			</Box>
		</Card>
	);
};

export default ProjectShowCase;
