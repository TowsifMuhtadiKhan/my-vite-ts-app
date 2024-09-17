import {
	Box,
	List,
	ListItem,
	ListItemButton,
	Typography,
	BottomNavigation,
	BottomNavigationAction,
	useMediaQuery,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

interface NavbarProps {
	selectedIndex: number;
	handleScroll: (id: string, index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedIndex, handleScroll }) => {
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<>
			{/* Side Navigation for Desktop */}
			{!isMobile && (
				<Box
					sx={{
						position: 'fixed',
						top: '50%',
						left: 0,
						transform: 'translateY(-50%)',
						width: '100%',
						maxWidth: '200px',
						bgcolor: '#000106',
						color: 'white',
						padding: 2,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: 'auto',
					}}
				>
					<List sx={{ flexGrow: 1, padding: 2 }}>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => handleScroll('home', 0)}
								sx={{
									color: selectedIndex === 0 ? '#5ADFCB' : 'white',
									borderLeft: selectedIndex === 0 ? '2px solid #5ADFCB' : 'none',
								}}
							>
								<HomeIcon sx={{ fontSize: '35px' }} />
								{selectedIndex === 0 && (
									<Typography
										sx={{
											ml: 1,
											fontWeight: selectedIndex === 0 ? 'bold' : 'normal',
										}}
									>
										Home
									</Typography>
								)}
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton
								onClick={() => handleScroll('aboutMe', 1)}
								sx={{
									color: selectedIndex === 1 ? '#5ADFCB' : 'white',
									borderLeft: selectedIndex === 1 ? '2px solid #5ADFCB' : 'none',
								}}
							>
								<PersonIcon sx={{ fontSize: '35px' }} />
								{selectedIndex === 1 && (
									<Typography
										sx={{
											ml: 1,
											fontWeight: selectedIndex === 1 ? 'bold' : 'normal',
										}}
									>
										About Me
									</Typography>
								)}
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton
								onClick={() => handleScroll('skills', 2)}
								sx={{
									color: selectedIndex === 2 ? '#5ADFCB' : 'white',
									borderLeft: selectedIndex === 2 ? '2px solid #5ADFCB' : 'none',
								}}
							>
								<AutoStoriesIcon sx={{ fontSize: '35px' }} />
								{selectedIndex === 2 && (
									<Typography
										sx={{
											ml: 1,
											fontWeight: selectedIndex === 2 ? 'bold' : 'normal',
										}}
									>
										Skills
									</Typography>
								)}
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton
								onClick={() => handleScroll('experience', 3)}
								sx={{
									color: selectedIndex === 3 ? '#5ADFCB' : 'white',
									borderLeft: selectedIndex === 3 ? '2px solid #5ADFCB' : 'none',
								}}
							>
								<WorkHistoryIcon sx={{ fontSize: '35px' }} />
								{selectedIndex === 3 && (
									<Typography
										sx={{
											ml: 1,
											fontWeight: selectedIndex === 3 ? 'bold' : 'normal',
										}}
									>
										Experience
									</Typography>
								)}
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			)}

			{/* Bottom Navigation for Mobile */}
			{isMobile && (
				<BottomNavigation
					value={selectedIndex}
					onChange={(_, newValue) => {
						handleScroll(
							newValue === 0
								? 'home'
								: newValue === 1
								? 'aboutMe'
								: newValue === 2
								? 'skills'
								: 'experience',
							newValue
						);
					}}
					sx={{
						width: '90%',
						position: 'fixed',
						bottom: 20,
						left: '50%',
						transform: 'translateX(-50%)',
						bgcolor: 'rgba(0, 1, 6, 0.8)',
						borderRadius: '12px',
						boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
						padding: '8px',
						zIndex: 1000,
					}}
				>
					<BottomNavigationAction
						label="Home"
						icon={<HomeIcon />}
						sx={{
							color: selectedIndex === 0 ? '#5ADFCB' : 'white',
							'& .MuiBottomNavigationAction-label': {
								color: selectedIndex === 0 ? '#5ADFCB' : 'white',
								fontWeight: selectedIndex === 0 ? 'bold' : 'normal',
							},
							'& .MuiSvgIcon-root': {
								color: selectedIndex === 0 ? '#5ADFCB' : 'white',
							},
						}}
					/>
					<BottomNavigationAction
						label="About Me"
						icon={<PersonIcon />}
						sx={{
							color: selectedIndex === 1 ? '#5ADFCB' : 'white',
							'& .MuiBottomNavigationAction-label': {
								color: selectedIndex === 1 ? '#5ADFCB' : 'white',
								fontWeight: selectedIndex === 1 ? 'bold' : 'normal',
							},
							'& .MuiSvgIcon-root': {
								color: selectedIndex === 1 ? '#5ADFCB' : 'white',
							},
						}}
					/>
					<BottomNavigationAction
						label="Skills"
						icon={<AutoStoriesIcon />}
						sx={{
							color: selectedIndex === 2 ? '#5ADFCB' : 'white',
							'& .MuiBottomNavigationAction-label': {
								color: selectedIndex === 2 ? '#5ADFCB' : 'white',
								fontWeight: selectedIndex === 2 ? 'bold' : 'normal',
							},
							'& .MuiSvgIcon-root': {
								color: selectedIndex === 2 ? '#5ADFCB' : 'white',
							},
						}}
					/>
					<BottomNavigationAction
						label="Experience"
						icon={<WorkHistoryIcon />}
						sx={{
							color: selectedIndex === 3 ? '#5ADFCB' : 'white',
							'& .MuiBottomNavigationAction-label': {
								color: selectedIndex === 3 ? '#5ADFCB' : 'white',
								fontWeight: selectedIndex === 3 ? 'bold' : 'normal',
							},
							'& .MuiSvgIcon-root': {
								color: selectedIndex === 3 ? '#5ADFCB' : 'white',
							},
						}}
					/>
				</BottomNavigation>
			)}
		</>
	);
};

export default Navbar;
