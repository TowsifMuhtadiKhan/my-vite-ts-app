import { Grid } from '@mui/material';
import LeftPart from './LeftSideBar';
import RightSide from './RightSidebar';

const MainBody = () => {
	return (
		<Grid container sx={{ width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
			<Grid
				item
				xs={12}
				md={6}
				sx={{
					bgcolor: '#000106',
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					height: 'auto',
					minHeight: { xs: 'auto', md: '100vh' }, // Minimum height to fill the viewport
					overflowY: { xs: 'auto', md: 'hidden' }, // No scroll on medium and larger devices
				}}
			>
				<LeftPart />
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
				sx={{
					bgcolor: '#000106',
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					height: 'auto',
					minHeight: '50vh',
					overflowY: 'auto', // Always scrollable
				}}
			>
				<RightSide />
			</Grid>
		</Grid>
	);
};

export default MainBody;
