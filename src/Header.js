import {React, useState, useEffect} from 'react';
import { HomeOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from "@material-ui/icons/Add";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { StoreMallDirectoryOutlined } from "@material-ui/icons";
import {Hidden,Avatar, Badge } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import './Header.css';
import facebook_logo from "./Images/logo.png";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./themes.js";

const StyledApp = styled.div`
color: ${(props)=> props.theme.fontColor};
`;
function Header() {
    const defaultProps = {
        color: "secondary",
        children: <NotificationsNoneOutlinedIcon />,
      };

      const [theme, setTheme] = useState("light");
  
const themeToggler =() =>{
 theme === "light" ? setTheme("dark") : setTheme("light");
};
// const logout = () => {
//     auth.signOut();
//   };
// const mode = useSelector((state) => state.util);
const getMode = () =>{
    return JSON.parse(localStorage.getItem("mode")) || false
}
const [dark, setMode] = useState(getMode())
useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
    
}, [dark])
    return (
        // <ThemeProvider theme={theme==="light" ? lightTheme:darkTheme}>
        // <GlobalStyles />
        // <StyledApp>
        <div className={dark ? "header_dark" : "header"}>
            <div className="start">
        <img src={facebook_logo} />
        <div className="inputs">
        <SearchIcon />
        <input placeholder="Search" />
        </div>
        </div>
        <div className="midum">
            <div className="button">
         <HomeOutlined fontSize="large" />
         </div>
         <div className="button">
         <PlayCircleOutlineIcon fontSize="large"  />
         </div>
         <div className="button">
         <StoreMallDirectoryOutlined fontSize="large" />
         </div>
         <div className="button">
         <SupervisedUserCircleIcon fontSize="large"  />
         </div>
         <div className="button" onClick={() => setMode(!dark)}>
        <Brightness4Icon fontSize="large" /> 
        {/* : <BrightnessHighIcon fontSize="large" /> */}
          </div>
        </div>
        <div className="last">
        <Avatar src="" onClick="" fontSize="large"   />
        <Hidden smDown>
            <Avatar>
        <AddIcon fontSize="large"  />
        </Avatar>
        <Avatar>
        <TelegramIcon  fontSize="large" />
        </Avatar>
        <Avatar>
        <Badge  badgeContent={10} max={9} {...defaultProps} fontSize="large"  />
        </Avatar>
        <Avatar>
         <ArrowDropDownRoundedIcon fontSize="large" />
         </Avatar>
         </Hidden>
        </div>
        </div>
        // </StyledApp>
        // </ThemeProvider>
    )
}

export default Header;



{/* <div className="button" onClick={() => themeToggler()}></div> */}