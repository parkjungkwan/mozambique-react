import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom"

const Navigation2 = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/home" style={{width:50, margin:10}}>Home</Link>
        <Link to="/counter" style={{width:50, margin:10}}>Counter</Link>
        <Link to="/todos" style={{width:50, margin:10}}>Todos</Link>
        <Link to="/signup" style={{width:60, margin:10}}>Sign UP</Link>
        <Link to="/login" style={{width:50, margin:10}}>Login</Link>
      </BottomNavigation>
    </Box>
  );
}

export default Navigation2