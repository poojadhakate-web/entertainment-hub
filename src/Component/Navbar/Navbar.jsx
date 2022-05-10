import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const useStyle = makeStyles({
    root:{
        width: "100%",
        position : 'fixed',
        bottom :0,
        backgroundColor: "#2d313a",
        zIndex : 100,
        }
})

const Navbar = () => {
    const [value, setValue] = React.useState(0);

    const classes = useStyle()
    const navigate = useNavigate();
    
    useEffect(() => {
      if(value === 0)
       navigate("/");
      if(value === 1) navigate("/movie");
      if(value === 2) navigate("/tvseries");
      if(value === 3) navigate("/search");
    }, [value, navigate])
  return (
    <>
      <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon/>} className="nav-item" />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} className="nav-item"/>
        <BottomNavigationAction label="Tv Series" icon={<LiveTvIcon/>} className="nav-item" />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} className="nav-item"/>
      </BottomNavigation>
    </Box>
    </>
  )
}

export default Navbar
