import { Box, Typography, useMediaQuery } from '@mui/material';

const Footer = () => {
	const isMobile = useMediaQuery('(max-width:900px)');
	return (
		<Box
			sx={{
				backgroundColor: '#000106', // Background color for the footer
				color: 'white', // Text color
				textAlign: 'center', // Center-align text
				p: 2, // Padding for spacing
				pt: isMobile ? '50px' : '150px',
				pb: isMobile ? '100px' : '50px',
			}}
		>
			<Typography variant="body2" color="inherit">
				© Towsif Muhtadi Khan. All Rights Reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
