import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					width: '80%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography fontSize={'36px'} fontWeight={'400'}>
					Protfolio
				</Typography>
				<Box>
					<Button>Github Account</Button>
					<Button>Resume</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
